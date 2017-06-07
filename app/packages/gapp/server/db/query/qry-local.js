appDeclareQuery({
  name: 'localList',
  collection: 'local',
  // sort: ['nome'],
  fn: function (instituicaoId) {
    return App.db.local.find({instituicaoId});
  }
});
appDeclareQuery({
  name: 'localPorId',
  collection: 'local',
  // sort: ['nome'],
  fn: function (instituicaoId, localId) {
    return App.db.local.find({ _id: localId, instituicaoId });
  }
});

