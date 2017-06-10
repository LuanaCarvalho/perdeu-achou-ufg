appDeclareQuery({
  name: 'perdidoList',
  collection: 'perdido',
  sort: ['descricao'],
  fn: function (instituicaoId) {
    return App.db.perdido.find({instituicaoId});
  }
});
appDeclareQuery({
  name: 'perdidoPorId',
  collection: 'perdido',
  // sort: ['nome'],
  fn: function (instituicaoId, perdidoId) {
    return App.db.perdido.find(
      {
        _id: perdidoId,
        instituicaoId
      }
    );
  }
});

