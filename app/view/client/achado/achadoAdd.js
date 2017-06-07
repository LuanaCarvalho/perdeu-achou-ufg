Template.achadoAdd.events({
  'click .adicionar': function (event, template) {
    var descricao = qs('#categoriaDescricao').value;
    var categoriaId = qs('[name="achadoCategoriaId"]').value;
    var localEncontradoId = qs('[name="achadoLocalId"]').value;
    var contatoId = 'superContatoId';
    if (descricao && categoriaId && localEncontradoId) {
      Meteor.call('achado.adicionar', 'instUFGSamabaia', {
        descricao,
        categoriaId,
        localEncontradoId,
        contatoId
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
  }
});