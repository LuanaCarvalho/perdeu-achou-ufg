Template.home.helpers({
  rendered: function () {

  }
});

Template.home.events({
  'click .entregar': function (event, template) {
    swal({
      title: 'Atenção',
      text: "Você verá uma lista de todos os objetos perdidos que foram cadastrado no sistema recentemente. Se algum dele for o que encontrou você pode verificar os dados de contato do dono do objeto. Caso contrário, você pode cadastrar um novo.",
      type: 'info',
      // showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then(function () {
      appRoute('/entregar');
    });
  },
  'click .encontrar': function (event, template) {
    swal({
      title: 'Atenção',
      text: "Você verá uma lista de todos os objetos achados que foram cadastrado no sistema recentemente. Se algum dele for o que perdeu você pode verificar os dados de contato da pessoa que encontrou o objeto. Caso contrário, você pode cadastrar um novo.",
      type: 'info',
      // showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then(function () {
      appRoute('/encontrar');
    });
  }
});