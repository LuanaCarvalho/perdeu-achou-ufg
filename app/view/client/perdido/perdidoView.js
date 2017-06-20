Template.perdidoView.helpers({
  nomeUsuario: function () {
    var usuarioId = this.perdido && this.perdido.usuarioId;
    var usuario = App.query.usuarioPorId(usuarioId).fetch()[0];
  },
  emails() {
    var contato = this && this.contato;
    return contato && contato.emails;
  },
  redeSocial() {
    var contato = this && this.contato;
    return contato && contato.redeSocial;
  },
  telefones() {
    var contato = this && this.contato;
    return contato && contato.telefones;
  },
  templateRedeSocial() {
    var def = App.enum.redeSocial.getDef(this.tipo);
    return Template['redeSocial_' + def.name];
  }
});

Template.perdidoView.events({
  'click .cancelar': function (event, template) {
    appRoute.back();
  },
  
});