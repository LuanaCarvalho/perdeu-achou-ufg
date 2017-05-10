/*appSchemas = {};

var gApp = {
    db: {}
}
// Meteor.startup(function () {
App = gApp
console.log('definição de app client')
// });
var declaredCollections = [];
appDeclareCollection = function (collection, schema) {
    if (declaredCollections[collection]) throw `Coleção já definida ${collection}`;
    var c;
    return declaredCollections[collection] = function () {
        c = new Mongo.Collection(collection);
        appSchemas[collection] = new SimpleSchema(schema);
        c.attachSchema(appSchemas[collection]);

        return c;
    }
}
*/