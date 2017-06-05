Template.achadoForm.helpers({
  categoriaSelect() {
    var self = this;
    var categoriaId = App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.categoriaId;
    return self._id === categoriaId ? 'selected' : '';
  },
  localSelect() {
    var self = this;
    var localId = App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.localId;
    return self._id === localId ? 'selected' : '';
  }
});