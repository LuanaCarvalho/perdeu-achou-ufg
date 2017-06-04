appDeclareRoute({
  url: '/achado',
  search: '/',
  role: 'default',
  template: 'achadoList',
  title() {
    return 'Achados';
  },
  subscriptions() {
    // Meteor.subscribe('achadoList', 'instUFGSamabaia');
    Meteor.subscribe('achadoList2', 'instUFGSamabaia');
  },
  data() {
    debugger
    var achado = App.query.achadoList('instUFGSamabaia').fetch();
    return {
      achado,
      // categoria
    }
  }
});
// appDeclareRoute({
//     url: '/categoria/adicionar',
//     search: '/',
//     role: 'super',
//     template: 'categoriaAdd',
//     title() {
//         return 'Adicionar categoria';
//     },
//     data() {

//     }
// });


appDeclareRoute({
  url: '/achado/:_achadoId',
  search: '/',
  role: 'default',
  template: 'achadoView',
  title() {
    return 'Achado';
  },
  subscriptions: function () {
    return Meteor.subscribe('achadoPorId', 'instUFGSamabaia', this.params._achadoId);
  },
  data() {
    var achado = App.query.achadoPorId('instUFGSamabaia', this.params._achadoId).fetch()[0];
    if (achado)
      return {
        achado
      }
  }
});
appDeclareRoute({
  url: '/achado/:_achadoId/edit',
  search: '/',
  role: 'default',
  template: 'achadoEdit',
  title() {
    return 'Achado';
  },
  subscriptions: function () {
    Meteor.subscribe('achadoList2', 'instUFGSamabaia');
  },
  data() {
    var achado = App.query.achadoPorId('instUFGSamabaia', this.params._achadoId).fetch()[0];
    var categorias = App.query.categoriaList('instUFGSamabaia').fetch();
    var locais = App.query.localList('instUFGSamabaia').fetch();
    if (achado)
      return {
        achado,
        categorias,
        locais
      };
  }
});
