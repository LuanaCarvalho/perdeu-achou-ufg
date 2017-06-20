appDeclareRoute({
  url: '/meusachados',
  search: '/',
  role: 'default',
  template: 'achadoList',
  title() {
    return 'Meus achados';
  },
  subscriptions() {
    Meteor.subscribe('meusAchadosList', 'instUFGSamabaia', Meteor.userId());
  },
  data() {
    var achado = App.query.meusAchadosList('instUFGSamabaia', Meteor.userId()).fetch();
    return {
      achado,
    }
  }
});
