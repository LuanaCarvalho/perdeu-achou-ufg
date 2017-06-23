appDeclareRoute({
  url: '/entregar',
  search: '/',
  role: 'default',
  template: 'perdidoList',
  title() {
    return 'Objetos achados';
  },
  subscriptions() {
    // Meteor.subscribe('perdidoList', 'instUFGSamabaia');
    Meteor.subscribe('perdidoList', 'instUFGSamabaia');
  },
  data() {
    var perdido = App.query.perdidoList('instUFGSamabaia').fetch().sort(function (a, b) {
      return new Date(b.dataCadastro) - new Date(a.dataCadastro);
    });
    return {
      perdido,
    }
  }
});