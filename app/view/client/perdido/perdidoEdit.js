Template.perdidoEdit.helpers({
  usuarioAtualEhUsuarioId() {
    if (this.perdido && this.perdido.usuarioId == Meteor.userId())
      return true;
    else {
      var perdidoId = this.perdido && this.perdido._id;
      if (perdidoId) {
        return false;
      }
    }
  },
});
Template.perdidoEdit.events({
  'click .salvar': function (event, template) {
    var perdidoId = this.perdido && this.perdido._id;
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
      Meteor.call('perdido.alterar', 'instUFGSamabaia', perdidoId, {
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
  'click .excluir': function (event, template) {
    var perdidoId = this.perdido && this.perdido._id;
    if (perdidoId) {
      swal({
        title: 'Você tem certeza?',
        text: "Você não poderá revertar essa mudança posteriormente!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero excluir!'
      }).then(function () {
        Meteor.call('perdido.excluir', 'instUFGSamabaia', perdidoId, function (err) {
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao excluir perdido, tente novamente!', 'error');
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