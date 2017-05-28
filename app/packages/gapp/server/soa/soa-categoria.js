appDeclareService('categoria', {
  adicionar: function (dados) {
    console.log(dados)
    return App.db.categoria.insert(dados);
  },
  alterar: function (categoriaId, dados) {
    return App.db.categoria.update({
      _id: categoriaId
    },
      {
        $set: dados
      });
  },
  excluir: function (categoriaId) {
    return App.db.categoria.remove({ _id: categoriaId });
  },
})
