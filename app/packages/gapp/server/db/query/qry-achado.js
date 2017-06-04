appDeclareQuery({
  name: 'categoriaList',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function (achadoId) {
    return App.db.categoria.find({achadoId});
  }
});
appDeclareQuery({
  name: 'categoriaPorId',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function (achadoId, categoriaId) {
    return App.db.categoria.find(
      {
        _id: categoriaId,
        achadoId
      }
    );
  }
});

