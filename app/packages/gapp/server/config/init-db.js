Meteor.startup(function () {
  declareRules();
});

initdb = function () {
  initUsuario();
};


Router.route('/resetDB', function () {
  initdb();
  this.response.end('reset finalizado');
  console.log('chegou aqui')
}, { where: 'server' });

initUsuario = function () {
  var users = [
    {
      email: 'gislainycrisostomo@gmail.com',
      password: 'gapp123'
    }
  ];
  users.forEach((user) => {
    var u = Meteor.users.findOne({
      "emails.address": user.email
    });
    if (u == null) {
      var userId = App.soa.usuario.adicionar(user.email, user.password);
      App.soa.permissao.adicionar(userId, ['super']);
    } else {
      App.soa.permissao.adicionar(u._id, ['super']);
    }
  });
}