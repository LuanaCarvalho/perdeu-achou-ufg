appSchemas = {};
appCollections = {}
var gApp = {
    db: appCollections,
    query: {},
    soa: {}
}
App = gApp
appDeclareCollection = function (collection, schema) {
    if (appCollections[collection]) throw `Coleção já definida ${collection}`;
    var c = new Mongo.Collection(collection);
    appCollections[collection] = c;
    appSchemas[collection] = new SimpleSchema(schema);
    c.attachSchema(appSchemas[collection]);
    return c;
}

appDeclareQuery = function (opts) { // name, fn, debug
    if (!opts.name)
        throw new Error('appDeclareQuery.name invalido - ' + JSON.stringify(arguments));
    if (!opts.collection)
        throw new Error('appDeclareQuery.collection invalido - ' + JSON.stringify(arguments));

    var query_fn;
    if (opts.fn) {
        if (opts.server_fn || opts.client_fn)
            throw new Error('appDeclareQuery.fn invalido (2) - ' + JSON.stringify(arguments));
        query_fn = opts.fn;
    }
    else {
        if (!(opts.server_fn && opts.client_fn))
            throw new Error('appDeclareQuery.fn invalido (3) - ' + JSON.stringify(arguments));
        if (Meteor.isClient) query_fn = opts.client_fn;
        else query_fn = opts.server_fn;
    }

    var qry;
    if (opts.debug) {
        console.dir('QUERY ' + opts.name + ' declarado ');
        qry = function () {
            var cursor;
            try {
                cursor = exec.apply(this, arguments);
            }
            catch (err) {
                console.dir('QUERY ' + opts.name + '\n params => ' +
                    JSON.stringify(arguments) + '\n ERROR => ' +
                    (err.stack ? err.stack : err.message));
                throw err;
            }
            console.dir('QUERY ' + opts.name + '\n params => ' +
                JSON.stringify(arguments) + '\n fetch => ' +
                JSON.stringify(cursor && cursor.fetch && cursor.fetch(), null, 2));
            return cursor;
        };
    }
    else {
        qry = exec;
    }
    gApp.query[opts.name] = qry;
    function exec() {
        var args = arguments;
        var cursor = query_fn.apply(this, args);
        if (!cursor) cursor = { count: () => 0, fetch: () => [] };

        if (Meteor.isServer) {
            return cursor;
        }
        if (opts.sort)
            cursor = advcursor_sort(cursor, opts.sort);
        return cursor;
    }
};

appDeclareService = function (serviceName, operations) {
    if (!gApp.soa[serviceName])
        gApp.soa[serviceName] = {};
    Object.keys(operations).forEach(function (op) {
        var fn = operations[op];
        gApp.soa[serviceName][op] = function () {
            return fn.apply(this, arguments);
        };
    });
};

function advcursor_sort(originalCursor, sort) {
    return {
        count() {
            return originalCursor.count();
        },
        fetch() {
            var args = [originalCursor.fetch()].concat(sort);
            gApp.utils.sort.apply(this, args);
            return args[0];
        }
    };
}