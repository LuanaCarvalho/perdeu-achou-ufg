Meteor.methods({
  'categoria.adicionar': function (dados) {
    return App.soa.categoria.adicionar(dados);
  },
  'categoria.alterar': function (categoriaId, dados) {
    return App.soa.categoria.alterar(categoriaId, dados);
  },
  'categoria.excluir': function (categoriaId) {
    return App.soa.categoria.excluir(categoriaId);
  },
})