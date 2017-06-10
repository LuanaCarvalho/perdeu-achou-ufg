Template.perdidoForm.helpers({
  categoriaSelect() {
    return App.state.router.data && App.state.router.data.perdido && App.state.router.data.perdido.categoriaId;

  },
  localSelect() {
    return App.state.router.data && App.state.router.data.perdido && App.state.router.data.perdido.localEncontradoId;
  }
});