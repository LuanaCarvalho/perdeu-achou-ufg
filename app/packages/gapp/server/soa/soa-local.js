appDeclareService('local', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId;
    return App.db.local.insert(dados);
  },
  alterar: function (instituicaoId, localId, dados) {
    dados.instituicaoId = instituicaoId;
    return App.db.local.update({
      _id: localId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId, localId) {
    return App.db.local.remove({ _id: localId, instituicaoId });
  },
})
