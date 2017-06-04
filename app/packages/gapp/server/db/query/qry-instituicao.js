appDeclareQuery({
  name: 'instituicaoList',
  collection: 'instituicao',
  // sort: ['nome'],
  fn: function () {
    return App.db.instituicao.find({});
  }
});
appDeclareQuery({
  name: 'instituicaoPorId',
  collection: 'instituicao',
  // sort: ['nome'],
  fn: function (instituicaoId) {
    return App.db.instituicao.find({ _id: instituicaoId });
  }
});

