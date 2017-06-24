Template.achadoView.helpers({
  nomeUsuario: function () {
    var usuarioId = this.achado && this.achado.usuarioId;
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
  },
  esseObjetoEhMeu() {
    if (this.achado && this.achado.localDeixadoId)
      return 'objEstaEmOutroLocal'
    return 'objEstaComUsuarioQueCadastarou'
  }
});

Template.achadoView.events({
  'click .cancelar': function (event, template) {
    appRoute.back();
  },
  'click .objEstaComUsuarioQueCadastarou': function (event, template) {
    var achadoId = this.achado._id;
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    if (contato) {
      swal({
        title: 'Você tem certeza?',
        text: "Enviaremos um e-mail de contato para usuário que cadastrou. Enquanto isso, você pode tentar entrar com contato com ele por conta própria atráves das informações fornecidas.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, esse objeto é meu!'
      }).then(function () {
        Meteor.call('achado.enviarEmail', 'instUFGSamabaia', achadoId, Meteor.userId(), function (err) {
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao tentar entrar em contato com a pessoa, tente novamente!', 'error');
          } else {
            swal('Eba...', 'Entramos em contato com a pessoa, por favor, depois de pegar seu objeto peça para ela entrar aqui e marcar com entregue. Isso é muito importante para nós!', 'success');
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
  'click .objEstaEmOutroLocal': function (event, template) {
    var achadoId = this.achado._id;
    var local = this.localDeixado || {};
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    if (contato) {
      swal({
        title: 'Você tem certeza?',
        text: "Esse objeto se encontra no " + local.nome + " você pode comparecer no local e pega-lo.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, esse objeto é meu!'
      }).then(function () {
        Meteor.call('achado.solucionar', 'instUFGSamabaia', achadoId, Meteor.userId(), function (err) {
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao tentar marcar o objeto como solucionado. Entre em contato com administradores!', 'error');
          }
          else appRoute.back();
        });
      });
    }
    else {
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