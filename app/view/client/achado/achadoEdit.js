Template.achadoEdit.helpers({
  usuarioAtualEhUsuarioId() {
    if (this.achado && this.achado.usuarioId == Meteor.userId())
      return true;
    else {
      var achadoId = this.achado && this.achado._id;
      console.log('/achado/' + achadoId)
      if (achadoId) {
        appRoute('/achado/' + achadoId);
        return false;
      }
    }
  }
});
Template.achadoEdit.events({
  'click .salvar': function (event, template) {
    var achadoId = this.achado && this.achado._id;
    var descricao = qs('#categoriaDescricao').value;
    var categoriaId = qs('[name="achadoCategoriaId"]').value;
    var localId = qs('[name="achadoLocalId"]').value;
    if (achadoId && descricao && categoriaId && localId) {
      Meteor.call('achado.alterar', 'instUFGSamabaia', achadoId, {
        descricao,
        categoriaId,
        localId
      }, function (err) {
        if (err) {
          return swal('Oops...', 'Ocorreu um erro inesperado, por favor, tente novamente :)', 'error');

        } else {
          swal('Ebaaa...', 'Seu achado foi alterado com sucesso :)', 'success');
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
  }
});