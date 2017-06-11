Template.perdidoList.helpers({
  categoria() {
    var self = this;
    var categoria = App.query.categoriaPorId('instUFGSamabaia', this.categoriaId).fetch()[0];
    if (categoria) {
      return categoria.nome;
    }
  },
  local() {
    var self = this;
    var local = App.query.localPorId('instUFGSamabaia', this.localPerdidoId).fetch()[0];
    if (local) {
      return local.nome;
    }
  },
});

Template.perdidoList.events({
  'click .perdidoItem': function (event, template) {
    var self = this;
    if (self && self.usuarioId == Meteor.userId())
      return appRoute('/perdido/' + self._id + '/edit');
    else {
      var perdidoId = self && self._id;
      if (perdidoId) {
        appRoute('/perdido/' + perdidoId);
      }
    }
  },
  'click .adicionarAdd': function (event, template) {
    appRoute('/perdido/adicionar');
  },

});