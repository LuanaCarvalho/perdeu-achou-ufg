Template.contatoOutroLocal.helpers({
  localSelect() {
    debugger
    if(App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.localEncontradoId)
      return App.state.router.data.achado.localEncontradoId
    if(App.state.router.data && App.state.router.data.perdido && App.state.router.data.perdido.localEncontradoId)
      return App.state.router.data.perdido.localEncontradoId
  }
});