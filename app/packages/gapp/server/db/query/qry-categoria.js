appDeclareQuery({
  name: 'categoriaList',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function () {
    return App.db.categoria.find({});
  }
});
appDeclareQuery({
  name: 'categoriaPorId',
  collection: 'categoria',
  // sort: ['nome'],
  fn: function (categoriaId) {
    return App.db.categoria.find({ _id: categoriaId });
  }
});

