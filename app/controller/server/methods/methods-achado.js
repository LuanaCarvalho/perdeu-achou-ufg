Meteor.methods({
  'achado.adicionar': function (instituicaoId, dados) {
    return App.soa.achado.adicionar(instituicaoId, dados);
  },
  'achado.alterar': function (instituicaoId, achadoId, dados) {
    return App.soa.achado.alterar(instituicaoId, achadoId, dados);
  },
  'achado.excluir': function (instituicaoId, achadoId) {
    return App.soa.achado.excluir(instituicaoId, achadoId);
  },
})