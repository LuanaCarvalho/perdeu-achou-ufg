Package.describe({
  name: 'gapp',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function (api) {
  api.versionsFrom('1.4.4.2');
  api.use('ecmascript');
  api.use('ui');
  api.use('aldeed:collection2');
  api.use('mongo');
  api.use('iron:router');
  api.use('accounts-ui');
  api.use('accounts-password');
  api.use('accounts-facebook');
  api.use('accounts-google');
  api.use('reywood:publish-composite');
  api.mainModule('gapp.js');
  api.addFiles('appDeclare.js');
  api.addFiles('client/declare.client.js');
  api.addFiles('client/pode.client.js');
  api.addFiles('server/config/accounts.js', 'server');
  api.addFiles('server/config/init-db.js', 'server');
  api.addFiles('server/db/schema/db-achado.js');
  api.addFiles('server/db/schema/db-categoria.js');
  api.addFiles('server/db/schema/db-contato.js');
  api.addFiles('server/db/schema/db-instituicao.js');
  api.addFiles('server/db/schema/db-local.js');
  api.addFiles('server/db/schema/db-perdido.js');
  api.addFiles('server/db/schema/db-roles.js');
  api.addFiles('server/db/query/qry-achado.js');
  api.addFiles('server/db/query/qry-categoria.js');
  api.addFiles('server/db/query/qry-contato.js');
  api.addFiles('server/db/query/qry-instituicao.js');
  api.addFiles('server/db/query/qry-local.js');
  api.addFiles('server/db/query/qry-perdido.js');
  api.addFiles('server/db/query/qry-usuario.js');
  api.addFiles('server/soa/soa-achado.js', 'server');
  api.addFiles('server/soa/soa-categoria.js', 'server');
  api.addFiles('server/soa/soa-contato.js', 'server');
  api.addFiles('server/soa/soa-instituicao.js', 'server');
  api.addFiles('server/soa/soa-local.js', 'server');
  api.addFiles('server/soa/soa-perdido.js', 'server');
  api.addFiles('server/soa/soa-permissao.js', 'server');
  api.addFiles('server/soa/soa-usuario.js', 'server');
  api.addFiles('server/publish/pub-achado.js', 'server');
  api.addFiles('server/publish/pub-categoria.js', 'server');
  api.addFiles('server/publish/pub-usuario.js', 'server');
  api.export([
    'App',
    'appDeclareCollection',
    'appCollections',
    'appDeclareService',
    'appDeclareRoute',
    'declareRules',
    'appRoute',
    'appDeclareEnum'
  ])
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('ddp');
  api.use('tinytest');
  api.use('gapp');
  api.mainModule('gapp-tests.js');
});

