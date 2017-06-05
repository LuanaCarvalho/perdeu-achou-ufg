Meteor.methods({
  'categoria.adicionar': function (instituicaoId, dados) {
    return App.soa.categoria.adicionar(instituicaoId, dados);
  },
  'categoria.alterar': function (instituicaoId, categoriaId, dados) {
    return App.soa.categoria.alterar(instituicaoId, categoriaId, dados);
  },
  'categoria.excluir': function (instituicaoId, categoriaId) {
    return App.soa.categoria.excluir(instituicaoId, categoriaId);
  },
})