appDeclareService('achado', {
  adicionar: function (dados) {
    console.log(dados)
    return App.db.achado.insert(dados);
  },
  alterar: function (achadoId, dados) {
    return App.db.achado.update({
      _id: achadoId
    },
      {
        $set: dados
      });
  },
  excluir: function (achadoId) {
    return App.db.achado.remove({ _id: achadoId });
  },
})
