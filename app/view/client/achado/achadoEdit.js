Template.achadoEdit.onRendered(function () {
  var self = this;
  Meteor.autorun(() => {
    if (App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.contatoId)
      self.estaComigo.set(true);
    if (App.state.router.data && App.state.router.data.achado && App.state.router.data.achado.localDeixadoId)
      self.outroLocal.set(true);
  });
});
Template.achadoEdit.onCreated(function () {
  this.estaComigo = new ReactiveVar(false);
  this.outroLocal = new ReactiveVar(false);
});

Template.achadoEdit.helpers({
  usuarioAtualEhUsuarioId() {
    if (this.achado && this.achado.usuarioId == Meteor.userId())
      return true;
    else {
      var achadoId = this.achado && this.achado._id;
      if (achadoId) {
        return false;
      }
    }
  },
  estaComigo() {
    return Template.instance().estaComigo.get();
  },
  outroLocal() {
    return Template.instance().outroLocal.get();
  },
  naoSelecionadoOpcao() {
    return !Template.instance().outroLocal.get() && !Template.instance().estaComigo.get();
  }
});
Template.achadoEdit.events({
  'click .salvar': function (event, template) {
    var achadoId = this.achado && this.achado._id;
    var descricao = qs('#categoriaDescricao').value;
    var categoriaId = qs('[name="achadoCategoriaId"]').value;
    var localEncontradoId = qs('[name="achadoLocalId"]').value;
    var contatoId = localDeixadoId = null;
    if (template.outroLocal.get()) {
      localDeixadoId = qs('[name="achadoLocalDeixadoId"]').value;
      if (!localDeixadoId) return swal('Oops...', 'Por favor, escolha um local deixado.', 'error');
    }
    else if (Template.instance().estaComigo.get()) {
      var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
      if (contato) contatoId = contato._id;
      else {
        return swal('Oops...', 'Por favor, salve as informações de contato :)', 'error');
      }
    } else {
      return swal('Oops...', 'Por favor, preencha as informações de contato. São muito úteis para nós :)', 'error');
    }
    if (descricao && categoriaId && localEncontradoId) {
      Meteor.call('achado.alterar', 'instUFGSamabaia', achadoId, {
        descricao,
        categoriaId,
        localEncontradoId,
        contatoId,
        localDeixadoId
      }, function (err) {
        if (err) {
          return swal('Oops...', 'Ocorreu um erro inesperado, por favor, tente novamente :)', 'error');

        } else {
          swal('Ebaaa...', 'Seu achado foi cadastro com sucesso :)', 'success');
          return appRoute.back();
        }
      });
    } else {
      if (!descricao)
        return swal('Oops...', 'Por favor, a descrição! Ela é importante para nós :)', 'error');
      if (!categoriaId)
        return swal('Oops...', 'Por favor, escolha uma categoria!', 'error');
      if (!categoriaId)
        return swal('Oops...', 'Por favor, escolha um local, tente novamente!', 'error');
    }

  },
  'click .excluir': function (event, template) {
    var achadoId = this.achado && this.achado._id;
    if (achadoId) {
      swal({
        title: 'Você tem certeza?',
        text: "Você não poderá revertar essa mudança posteriormente!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero excluir!'
      }).then(function () {
        Meteor.call('achado.excluir', 'instUFGSamabaia', achadoId, function (err) {
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao excluir achado, tente novamente!', 'error');
          } else {
            swal('Deletada...', 'Categoria foi deletada com sucesso!', 'success');
            return appRoute.back();

          }
        })
      })
    }
  },
  'click .cancelar': function (event, template) {
    appRoute.back();
  },
  'click .estaComigo': function (event, template) {
    template.estaComigo.set(true);
  },
  'click .outroLocal': function (event, template) {
    template.outroLocal.set(true);
  },
  'click .voltarContato': function (event, template) {
    template.outroLocal.set(false);
    template.estaComigo.set(false);
  },
});