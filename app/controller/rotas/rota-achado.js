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
    Meteor.subscribe('achadoList', 'instUFGSamabaia');
  },
  data() {
    var achado = App.query.achadoList('instUFGSamabaia').fetch();
    return {
      achado,
    }
  }
});
appDeclareRoute({
  url: '/achado/adicionar',
  search: '/',
  role: 'default',
  template: 'achadoAdd',
  title() {
    return 'Adicionando achado';
  },
  subscriptions: function () {
    Meteor.subscribe('achadoAdd', 'instUFGSamabaia', Meteor.userId());
  },
  data() {
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    var categorias = App.query.categoriaList('instUFGSamabaia').fetch();
    var locais = App.query.localList('instUFGSamabaia').fetch();
    return {
      categorias,
      locais,
      contato
    };
  }
});


appDeclareRoute({
  url: '/achado/:_achadoId',
  search: '/',
  role: 'default',
  template: 'achadoView',
  title() {
    return 'Achado';
  },
  subscriptions: function () {
    Meteor.subscribe('achadoPorId', 'instUFGSamabaia', this.params._achadoId);
  },
  data() {
    var achado = App.query.achadoPorId('instUFGSamabaia', this.params._achadoId).fetch()[0];
    if (!achado) return;
    debugger
    var localDeixado = {};
    var contato = App.query.contatoPorId(achado.contatoId).fetch()[0];
    var categoria = App.query.categoriaPorId('instUFGSamabaia', achado.categoriaId).fetch()[0];
    var localEncontrado = App.query.localPorId('instUFGSamabaia', achado.localEncontradoId).fetch()[0];
    if (achado.localDeixadoId)
      localDeixado = App.query.localPorId('instUFGSamabaia', achado.localDeixadoId).fetch()[0];
    var usuario = App.query.usuarioPorId(achado.usuarioId).fetch()[0];
    return {
      achado,
      contato,
      usuario,
      localEncontrado,
      localDeixado,
      categoria
    };
  }
});
appDeclareRoute({
  url: '/achado/:_achadoId/edit',
  search: '/',
  role: 'default',
  template: 'achadoEdit',
  title() {
    return 'Editando achado';
  },
  subscriptions: function () {
    Meteor.subscribe('achadoPorId', 'instUFGSamabaia', this.params._achadoId);
  },
  data() {
    var achado = App.query.achadoPorId('instUFGSamabaia', this.params._achadoId).fetch()[0];
    if (achado) {
      var localDeixado = {};
      var contato = App.query.contatoPorId(achado.contatoId).fetch()[0];
      var categoria = App.query.categoriaPorId('instUFGSamabaia', achado.categoriaId).fetch()[0];
      var localEncontrado = App.query.localPorId('instUFGSamabaia', achado.localEncontradoId).fetch()[0];
      if (achado.localDeixadoId)
        localDeixado = App.query.localPorId('instUFGSamabaia', achado.localDeixadoId).fetch()[0];
      var usuario = App.query.usuarioPorId(achado.usuarioId).fetch()[0];
      var categorias = App.query.categoriaList('instUFGSamabaia').fetch();
      var locais = App.query.localList('instUFGSamabaia').fetch();
      return {
        achado,
        contato,
        usuario,
        localEncontrado,
        localDeixado,
        categoria,
        categorias,
        locais,
      };
    }
  }
});
