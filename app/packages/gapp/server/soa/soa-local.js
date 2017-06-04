appDeclareService('local', {
  adicionar: function (dados) {
    return App.db.local.insert(dados);
  },
  alterar: function (localId, dados) {
    return App.db.local.update({
      _id: localId
    },
      {
        $set: dados
      });
  },
  excluir: function (localId) {
    return App.db.local.remove({ _id: localId });
  },
})
