appDeclareRoute({
  url: '/meusperdidos',
  search: '/',
  role: 'default',
  template: 'perdidoList',
  title() {
    return 'Meus perdidos';
  },
  subscriptions() {
    // Meteor.subscribe('perdidoList', 'instUFGSamabaia');
    Meteor.subscribe('meusPerdidosList', 'instUFGSamabaia', Meteor.userId());
  },
  data() {
    var perdido = App.query.meusPerdidosList('instUFGSamabaia', Meteor.userId()).fetch();
    return {
      perdido,
    }
  }
});
