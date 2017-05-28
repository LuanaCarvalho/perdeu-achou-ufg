Template.categoriaList.events({
  'click .adicionarCategoria': function () {
    appRoute('/categoria/adicionar');
  },
  'click .categoriaItem': function () {
    appRoute('/categoria/' + this._id);
  },

});