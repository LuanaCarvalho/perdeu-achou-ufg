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
    var local = App.query.localPorId('instUFGSamabaia', this.localId).fetch()[0];
    if (local) {
      return local.nome;
    }
  },
});

Template.achadoList.events({
  'click .achadoItem': function (event, template) {
    debugger
    var self = this;
    appRoute('/achado/' + self._id + '/edit');
  }
});