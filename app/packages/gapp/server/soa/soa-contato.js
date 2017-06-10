appDeclareService('contato', {
  adicionar: function (dados) {
    var exist = App.query.contatoPorUsuarioId(dados.usuarioId).fetch()[0];
    if (!exist)
      return App.db.contato.insert(dados);
    delete dados._id;
    return App.db.contato.update({ usuarioId: dados.usuarioId }, { $set: dados })
  },
  alterar: function (contatoId, dados) {
    return App.db.contato.update({
      _id: contatoId
    },
      {
        $set: dados
      });
  },
  excluir: function (contatoId) {
    return App.db.contato.remove({ _id: contatoId });
  },
})
