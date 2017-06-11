appDeclareRoute({
  url: '/perdido',
  search: '/',
  role: 'default',
  template: 'perdidoList',
  title() {
    return 'Achados';
  },
  subscriptions() {
    // Meteor.subscribe('perdidoList', 'instUFGSamabaia');
    Meteor.subscribe('perdidoList', 'instUFGSamabaia');
  },
  data() {
    var perdido = App.query.perdidoList('instUFGSamabaia').fetch();
    return {
      perdido,
    }
  }
});
appDeclareRoute({
  url: '/perdido/adicionar',
  search: '/',
  role: 'default',
  template: 'perdidoAdd',
  title() {
    return 'Adicionando perdido';
  },
  subscriptions: function () {
    Meteor.subscribe('perdidoAdd', 'instUFGSamabaia', Meteor.userId());
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
  url: '/perdido/:_perdidoId',
  search: '/',
  role: 'default',
  template: 'perdidoView',
  title() {
    return 'Achado';
  },
  subscriptions: function () {
    Meteor.subscribe('perdidoPorId', 'instUFGSamabaia', this.params._perdidoId);
  },
  data() {
    var perdido = App.query.perdidoPorId('instUFGSamabaia', this.params._perdidoId).fetch()[0];
    if (!perdido) return;
    debugger
    var localDeixado = {};
    var contato = App.query.contatoPorId(perdido.contatoId).fetch()[0];
    var categoria = App.query.categoriaPorId('instUFGSamabaia', perdido.categoriaId).fetch()[0];
    var localPerdido = App.query.localPorId('instUFGSamabaia', perdido.localPerdidoId).fetch()[0];
    if (perdido.localDeixadoId)
      localDeixado = App.query.localPorId('instUFGSamabaia', perdido.localDeixadoId).fetch()[0];
    var usuario = App.query.usuarioPorId(perdido.usuarioId).fetch()[0];
    return {
      perdido,
      contato,
      usuario,
      localPerdido,
      localDeixado,
      categoria
    };
  }
});
appDeclareRoute({
  url: '/perdido/:_perdidoId/edit',
  search: '/',
  role: 'default',
  template: 'perdidoEdit',
  title() {
    return 'Editando perdido';
  },
  subscriptions: function () {
    Meteor.subscribe('perdidoPorId', 'instUFGSamabaia', this.params._perdidoId);
  },
  data() {
    var perdido = App.query.perdidoPorId('instUFGSamabaia', this.params._perdidoId).fetch()[0];
    if (perdido) {
      var localDeixado = {};
      var contato = App.query.contatoPorId(perdido.contatoId).fetch()[0];
      var categoria = App.query.categoriaPorId('instUFGSamabaia', perdido.categoriaId).fetch()[0];
      var localPerdido = App.query.localPorId('instUFGSamabaia', perdido.localPerdidoId).fetch()[0];
      if (perdido.localDeixadoId)
        localDeixado = App.query.localPorId('instUFGSamabaia', perdido.localDeixadoId).fetch()[0];
      var usuario = App.query.usuarioPorId(perdido.usuarioId).fetch()[0];
      var categorias = App.query.categoriaList('instUFGSamabaia').fetch();
      var locais = App.query.localList('instUFGSamabaia').fetch();
      return {
        perdido,
        contato,
        usuario,
        localPerdido,
        localDeixado,
        categoria,
        categorias,
        locais,
      };
    }
  }
});
