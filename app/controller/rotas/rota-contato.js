appDeclareRoute({
  url: '/meusdados',
  search: '/',
  role: 'default',
  template: 'contatoView',
  title() {
    return 'Meus dados';
  },
  subscriptions() {
    Meteor.subscribe('contatoPorUsuarioId', Meteor.userId());
  },
  data() {
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    if (contato)
      return {
        contato
      }
  }
});