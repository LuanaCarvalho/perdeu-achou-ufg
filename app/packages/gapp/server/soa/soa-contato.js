appDeclareService('contato', {
  adicionar: function (dados) {
    return App.db.contato.upsert({usuarioId: dados.usuarioId}, { $set: dados} );
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
