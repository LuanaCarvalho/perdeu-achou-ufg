Template.achadoList.helpers({
  categoria() {
    var self = this;
    var categoria = App.query.categoriaPorId('instUFGSamabaia', this.categoriaId).fetch()[0];
    if (categoria) {
      return categoria.nome;
    }
  },
  local() {
    var self = this;
    var local = App.query.localPorId('instUFGSamabaia', this.localEncontradoId).fetch()[0];
    if (local) {
      return local.nome;
    }
  },
});

Template.achadoList.events({
  'click .achadoItem': function (event, template) {
    var self = this;
    if (self && self.usuarioId == Meteor.userId())
      return appRoute('/achado/' + self._id + '/edit');
    else {
      var achadoId = self && self._id;
      if (achadoId) {
        appRoute('/achado/' + achadoId);
      }
    }
  },
  'click .adicionarAdd': function (event, template) {
    appRoute('/achado/adicionar');
  },

});