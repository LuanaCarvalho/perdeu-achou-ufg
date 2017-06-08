Template.contatoOutroLocal.helpers({
  localSelect() {
    return this.achado && this.achado.localEncontradoId;
  }
});