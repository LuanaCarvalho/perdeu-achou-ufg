appDeclareQuery({
  name: 'achadoList',
  collection: 'achado',
  sort: ['descricao'],
  fn: function (instituicaoId) {
    return App.db.achado.find({ instituicaoId });
  }
});
appDeclareQuery({
  name: 'meusAchadosList',
  collection: 'achado',
  sort: ['descricao'],
  fn: function (instituicaoId, usuarioId) {
    return App.db.achado.find({ instituicaoId, usuarioId });
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

