appDeclareService('achado', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    return App.db.achado.insert(dados);
  },
  alterar: function (instituicaoId, achadoId, dados) {
    return App.db.achado.update({
      _id: achadoId,
      instituicaoId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId, achadoId) {
    return App.db.achado.remove({ _id: achadoId, instituicaoId});
  },
})
