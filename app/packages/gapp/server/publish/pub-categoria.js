 Meteor.publish('categoriaList', function (instituicaoId) {
    return App.query.categoriaList(instituicaoId);
  });
 Meteor.publish('categoriaPorId', function (instituicaoId, categoriaId) {
    return App.query.categoriaPorId(instituicaoId, categoriaId);
  });