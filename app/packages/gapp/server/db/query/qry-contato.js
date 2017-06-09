appDeclareQuery({
  name: 'contatoList',
  collection: 'contato',
  // sort: ['nome'],
  fn: function (instituicaoId) {
    return App.db.contato.find({instituicaoId});
  }
});
appDeclareQuery({
  name: 'contatoPorId',
  collection: 'contato',
  // sort: ['nome'],
  fn: function (contatoId) {
    return App.db.contato.find({ _id: contatoId });
  }
});

appDeclareQuery({
  name: 'contatoPorUsuarioId',
  collection: 'contato',
  // sort: ['nome'],
  fn: function (usuarioId) {
    return App.db.contato.find({ usuarioId });
  }
});

