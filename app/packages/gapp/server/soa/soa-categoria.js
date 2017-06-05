appDeclareService('categoria', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    return App.db.categoria.insert(dados);
  },
  alterar: function (instituicaoId, categoriaId, dados) {
    dados.instituicaoId = instituicaoId;
    return App.db.categoria.update({
      _id: categoriaId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId, categoriaId) {
    return App.db.categoria.remove({ _id: categoriaId, instituicaoId });
  },
})
