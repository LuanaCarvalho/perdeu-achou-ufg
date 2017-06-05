appDeclareQuery({
  name: 'categoriaList',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function (instituicaoId) {
    return App.db.categoria.find({instituicaoId});
  }
});
appDeclareQuery({
  name: 'categoriaPorId',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function (instituicaoId, categoriaId) {
    return App.db.categoria.find(
      {
        _id: categoriaId,
      }
    );
  }
});

