appDeclareQuery({
  name: 'achadoList',
  collection: 'achado',
  // sort: ['nome'],
  fn: function (instituicaoId) {
    return App.db.achado.find({instituicaoId});
  }
});
appDeclareQuery({
  name: 'achadoPorId',
  collection: 'achado',
  // sort: ['nome'],
  fn: function (instituicaoId, achadoId) {
    return App.db.achado.find(
      {
        _id: achadoId,
        instituicaoId
      }
    );
  }
});

