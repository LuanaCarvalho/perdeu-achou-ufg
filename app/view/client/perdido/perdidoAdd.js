Template.perdidoAdd.events({
  'click .adicionar': function (event, template) {
    var descricao = qs('#categoriaDescricao').value;
    var categoriaId = qs('[name="perdidoCategoriaId"]').value;
    var localPerdidoId = qs('[name="perdidoLocalId"]').value;
    var contatoId = null;
    var contato = App.query.contatoPorUsuarioId(Meteor.userId()).fetch()[0];
    if (contato) contatoId = contato._id;
    else {
      return swal('Oops...', 'Por favor, salve as informações de contato :)', 'error');
    }
    if (descricao && categoriaId && localPerdidoId) {
      Meteor.call('perdido.adicionar', 'instUFGSamabaia', {
        descricao,
        categoriaId,
        localPerdidoId,
        contatoId,
      }, function (err) {
        if (err) {
          return swal('Oops...', 'Ocorreu um erro inesperado, por favor, tente novamente :)', 'error');

        } else {
          swal('Ebaaa...', 'Seu perdido foi cadastro com sucesso :)', 'success');
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
});
