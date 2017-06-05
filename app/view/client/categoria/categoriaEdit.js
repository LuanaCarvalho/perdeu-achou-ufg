Template.categoriaEdit.events({
  'click .adicionar': function (event) {
    var categoriaId = this.categoria && this.categoria._id;
    var nome = qs('#categoriaNome').value;
    var descricao = qs('#categoriaDescricao').value;
    if (categoriaId && nome && descricao) {
      Meteor.call('categoria.alterar', 'instUFGSamabaia', categoriaId, { nome, descricao }, function (err) {
        if (err) {
          swal('Oops...', 'Ocorreu um erro ao editar categoria, tente novamente!', 'error');
        } else {
          swal('Ebaa...', 'Categoria foi editada com sucesso!', 'success');
          return appRoute.back();
        }
      })
    }
  },
  'click .excluir': function (event) {
    var categoriaId = this.categoria && this.categoria._id;
    if (categoriaId) {
      swal({
        title: 'Você tem certeza?',
        text: "Você não poderá revertar essa mudança posteriormente!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero excluir!'
      }).then(function () {
        Meteor.call('categoria.excluir', 'instUFGSamabaia', categoriaId, function (err) {
          if (err) {
            swal('Oops...', 'Ocorreu um erro ao excluir categoria, tente novamente!', 'error');
          } else {
            swal('Deletada...', 'Categoria foi deletada com sucesso!', 'success');
            return appRoute.back();

          }
        })
      })
    }
  },
  'click .cancelar': function (event) {
    appRoute('/categoria');
  }
})