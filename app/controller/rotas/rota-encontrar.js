appDeclareRoute({
  url: '/encontrar',
  search: '/',
  role: 'default',
  template: 'achadoList',
  title() {
    return 'Objetos achados';
  },
  subscriptions() {
    // Meteor.subscribe('perdidoList', 'instUFGSamabaia');
    Meteor.subscribe('achadoList', 'instUFGSamabaia');
  },
  data() {
    var achado = App.query.achadoList('instUFGSamabaia').fetch().sort(function (a, b) {
      return new Date(b.dataCadastro) - new Date(a.dataCadastro);
    });
    return {
      achado,
      encontrar: true
    }
  }
});