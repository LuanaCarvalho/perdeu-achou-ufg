appDeclareService('instituicao', {
  adicionar: function (dados) {
    return App.db.instituicao.insert(dados);
  },
  alterar: function (instituicaoId, dados) {
    return App.db.instituicao.update({
      _id: instituicaoId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId) {
    return App.db.instituicao.remove({ _id: instituicaoId });
  },
})
