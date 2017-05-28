 Meteor.publish('categoriaList', function () {
    return App.query.categoriaList();
  });
 Meteor.publish('categoriaPorId', function (categoriaId) {
    return App.query.categoriaPorId(categoriaId);
  });