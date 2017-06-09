Meteor.methods({
  'contato.adicionar': function (dados) {
    return App.soa.contato.adicionar( dados);
  },
  'contato.alterar': function (contatoId, dados) {
    return App.soa.contato.alterar(instituicaoId, contatoId, dados);
  },
  'contato.excluir': function (contatoId) {
    return App.soa.contato.excluir(contatoId);
  },
})