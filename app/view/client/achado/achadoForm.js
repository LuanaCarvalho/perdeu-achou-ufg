Template.achadoForm.helpers({
  categoriaSelect() {
    return App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.categoriaId;

  },
  localSelect() {
    return App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.localEncontradoId;
  }
});