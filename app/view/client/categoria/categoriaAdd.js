Template.categoriaAdd.events({
  'click .adicionar': function (event) {
    var nome = qs('#categoriaNome').value;
    var descricao = qs('#categoriaDescricao').value;
    if (nome && descricao) {
      Meteor.call('categoria.adicionar', 'instUFGSamabaia', { nome, descricao }, function (err) {
        if (err) {
          swal('Oops...', 'Ocorreu um erro ao adicionar categoria, tente novamente!', 'error');
        } else {
          swal('Ebaa...', 'Categoria foi adicionada com sucesso!', 'success');
          return appRoute.back();
        }
      })
    }
  },
  'click .cancelar': function (event) {
    appRoute('/categoria');
  }
})