Meteor.methods({
  'perdido.adicionar': function (instituicaoId, dados) {
    return App.soa.perdido.adicionar(instituicaoId, dados);
  },
  'perdido.alterar': function (instituicaoId, perdidoId, dados) {
    return App.soa.perdido.alterar(instituicaoId, perdidoId, dados);
  },
  'perdido.excluir': function (instituicaoId, perdidoId) {
    return App.soa.perdido.excluir(instituicaoId, perdidoId);
  },
})