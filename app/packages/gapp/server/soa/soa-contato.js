appDeclareService('contato', {
  adicionar: function (dados) {
    console.log(dados)
    return App.db.contato.insert(dados);
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
