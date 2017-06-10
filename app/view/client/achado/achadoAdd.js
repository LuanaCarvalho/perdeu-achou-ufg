
Template.achadoAdd.onCreated(function () {
  this.estaComigo = new ReactiveVar(false);
  this.outroLocal = new ReactiveVar(false);
});

Template.achadoAdd.helpers({
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


Template.achadoAdd.events({
  'click .adicionar': function (event, template) {
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
      Meteor.call('achado.adicionar', 'instUFGSamabaia', {
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
