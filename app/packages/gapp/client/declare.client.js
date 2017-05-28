
/* global Router */

appDeclareRoute = function (routeOptions) {
    /*  if (!routeOptions.search) {
        alert('appDeclareRoute sem search: '+JSON.stringify(routeOptions));
      }*/
    if (!routeOptions.url) alert('appDeclareRoute sem url: ' + JSON.stringify(routeOptions));
    //   if (!(routeOptions.role)) alert('appDeclareRoute sem role/pode: '+JSON.stringify(routeOptions));
    routeOptions.url = routeRoot(routeOptions.url);
    Router.route(routeOptions.url,
        {
            name: 'appRoute.' + routeOptions.url.replace(/\//g, '.'),
            layoutTemplate: typeof routeOptions.layoutTemplate === 'undefined' ? 'mainLayout' : routeOptions.layoutTemplate,
            waitOn() {
                if (!Meteor.userId()) {
                    if (!(/\/criarconta/g.test(routeOptions.url) ||
                        /\/esqueciasenha/g.test(routeOptions.url)))
                        this.redirect('/login');
                }
                if (routeOptions.subscriptions)
                    routeOptions.subscriptions.call(this);
            },
            action() {
                var self = this;
                var redirect = self.redirect;
                this.redirect = function (url) {
                    return redirect.call(self, routeRoot(url));
                };
                var data = routeOptions.data ? routeOptions.data.call(self) : self.data || {};
                self.data = data;
                App.state.router = {
                    url: self.url,
                    template: routeOptions.template,
                    params: self.params || {},
                    query: self.params.query || {},
                    data: data || {}
                };
                App.state.usuario = App.query.usuarioLogado(Meteor.userId()).fetch()[0];
                appDeclareRoute.doSearch = function (text) {
                    if (typeof routeOptions.search === 'function')
                        routeOptions.search(text);
                    else if (text)
                        appRoute(routeOptions.search + '/q/' + text + location.search + location.hash);
                    else
                        appRoute(routeOptions.search + location.search + location.hash);
                };
                var _pode = routeOptions.role && pode(routeOptions.role);
                if (_pode) {
                    if (typeof routeOptions.title === 'function') {
                        App.apptitle.text = routeOptions.title.call(self) + ' - Perdeu? Achou! UFG';
                        App.apptitle.menu = routeOptions.title.call(self);
                    }
                    else if (typeof routeOptions.title === 'string') {
                        App.apptitle.menu = routeOptions.title;
                        App.apptitle.text = routeOptions.title + ' - Perdeu? Achou! UFG';
                    }
                    else {
                        App.apptitle.menu = 'Perdeu? Achou! UFG'
                        App.apptitle.text = 'Perdeu? Achou! UFG';
                    }
                    if (routeOptions.action)
                        routeOptions.action.call(self);
                    self.render(routeOptions.template, { data });
                }
                else {
                    App.state.router = {
                        url: self.url,
                        params: {},
                        query: {},
                        data: {}
                    };
                    App.apptitle.menu = 'Perdeu? Achou! UFG'
                    App.apptitle.text = 'Perdeu? Achou! UFG';
                    appDeclareRoute.doSearch = function (text) {
                        if (typeof routeOptions.search === 'function')
                            routeOptions.search(text);
                        else if (text)
                            appRoute(routeOptions.search + '/q/' + text + location.search + location.hash);
                        else
                            appRoute(routeOptions.search + location.search + location.hash);
                    };
                    // return self.render('naopossuipermissao');
                }
            }
        });
};

appRoute = function (opts) {
    var iron_route_name, iron_opts = { query: '' };
    if (typeof opts === 'string') {
        iron_route_name = routeRoot(opts);
    }
    else {
        iron_route_name = routeRoot(opts.rota || location.pathname);

        if (opts.query) {
            var query = Router.current().params.query;
            Object.keys(opts.query).forEach(function (nome) {
                query[nome] = opts.query[nome];
            });
            var q = Object.keys(query)
                .filter((nome) => query[nome])
                .map((nome) => {
                    var valor = query[nome];
                    return nome + '=' + valor;
                }).join('&');
            iron_opts.query = q ? '?' + q : '';
        }
    }
    Router.go(iron_route_name + iron_opts.query);
};



function routeRoot(url) {
    return url;
}

appRoute.back = function () {
    history.back();
};

appRoute.configure = function (opts) {
    Router.configure(opts);
};

appRoute.beforeAction = function (fn) {
    Router.onBeforeAction(fn);
};

appRoute.afterAction = function (fn) {
    Router.onAfterAction(fn);
};

appRoute.redirectSite = function (url) {
    Router.go(url);
};

