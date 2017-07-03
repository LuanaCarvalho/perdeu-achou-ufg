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
  'click .entrarEmContato': function (event, template) {
    var perdidoId = this.perdido._id;
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    if (contato) {
      swal({
        title: 'Você tem certeza?',
        text: "Enviaremos um e-mail de contato para usuário que cadastrou. Enquanto isso, você pode tentar entrar com contato com ele por conta própria atráves das informações fornecidas.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, esse objeto está comigo!'
      }).then(function () {
        Meteor.call('perdido.enviarEmail', 'instUFGSamabaia', perdidoId, Meteor.userId(), function (err) {
          console.log(err)
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao tentar entrar em contato com a pessoa, tente novamente!', 'error');
          } else {
            swal('Eba...', 'Entramos em contato com a pessoa, por favor, depois de entrar o objeto peça para ela entrar aqui e marcar com entregue. Isso é muito importante para nós!', 'success');
            return appRoute.back();

          }
        })
      })
    } else {
      swal({
        title: 'Ops...',
        text: "Verificamos que você não tem informação para contato cadastrada. Por favor cadastre antes!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, vou cadastrar!'
      }).then(function () {
        appRoute('/meusdados');
      });
    }
  },
});