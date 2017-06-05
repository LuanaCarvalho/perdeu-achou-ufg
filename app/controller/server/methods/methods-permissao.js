Meteor.methods({
  'permissao.adicionar': function (userId, permissoes) {
    return App.soa.permissao.adicionar(userId, permissoes);
  }
})