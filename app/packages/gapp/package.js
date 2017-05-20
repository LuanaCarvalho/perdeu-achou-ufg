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
  api.use('aldeed:collection2');
  api.use('mongo');
  api.mainModule('gapp.js');
  api.addFiles('appDeclare.js');
  api.addFiles('client/declare.client.js');
  api.addFiles('server/db/schema/db-perdido.js', 'server');
  api.addFiles('server/db/query/qry-perdido.js', 'server');
  api.addFiles('server/soa/soa-perdido.js', 'server');
  api.export([
    'App',
    'appDeclareCollection',
    'appCollections',
    'appDeclareService',
    'appDeclareRoute'
  ])
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('ddp');
  api.use('tinytest');
  api.use('gapp');
  api.mainModule('gapp-tests.js');
});

