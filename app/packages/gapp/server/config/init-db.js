Meteor.startup(function () {
  declareRules();
});

initdb = function () {
  dropCollections();
  initUsuario();
  initCategoria();
};


Router.route('/resetDB', function () {
  initdb();
  this.response.end('reset finalizado');
  console.log('chegou aqui')
}, { where: 'server' });


dropCollections = function () {
  Object.keys(appCollections).forEach((c) => {
    App.db[c].remove({})
  })
}
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

initCategoria = function () {
  const categorias = [
    {
      _id: 'categoriaComputadoresId',
      nome: 'Computadores e periféricos',
      descricao: 'Notebook, computadores, pendrive e outros periféricos.'
    },
    {
      _id: 'categoriaDispositivosMoveis',
      nome: 'Dispositivos móveis e periféricos',
      descricao: 'Smartphones, celulares, tablets, carregador, fone de ouvido e outros periféricos.'
    },
  ];
  categorias.forEach((c) => {
    const cat = App.query.categoriaPorId(c._id).fetch();
    if (cat.length == 0)
      App.soa.categoria.adicionar(c);
  })
}