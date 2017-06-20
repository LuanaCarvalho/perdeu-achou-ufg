Meteor.startup(function () {
  declareRules();
});

initdb = function () {
  // dropCollections();
  initInstituicao();
  initLocal();
  initUsuario();
  initContato();
  initCategoria();
  initAchado();
  initPerdido();
};


Router.route('/resetDB/all', function () {
  initdb();
  this.response.end('reset finalizado');
}, { where: 'server' });


// Router.route('/resetDB/drop', function () {
//   dropCollections();
//   this.response.end('drop nas coleções');
// }, { where: 'server' });

Router.route('/resetDB/instituicao', function () {
  initInstituicao();
  this.response.end('insert instituicao');
}, { where: 'server' });

Router.route('/resetDB/local', function () {
  initLocal();
  this.response.end('insert local');
}, { where: 'server' });

Router.route('/resetDB/contato', function () {
  initContato();
  this.response.end('insert contato');
}, { where: 'server' });

Router.route('/resetDB/categoria', function () {
  initCategoria();
  this.response.end('insert categoria');
}, { where: 'server' });

Router.route('/resetDB/achado', function () {
  initAchado();
  this.response.end('insert achado');
}, { where: 'server' });


Router.route('/resetDB/perdido', function () {
  initPerdido();
  this.response.end('insert perdido');
}, { where: 'server' });

Router.route('/resetDB/usuario', function () {
  initUsuario();
  this.response.end('insert usuario');
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
      password: '123',
      roles: ['super']
    },
    {
      email: 'gislainy@outlook.com',
      password: '123',
      roles: ['default']
    },
    {
      email: 'pabllo@teste.com',
      password: '123',
      roles: ['default']
    },
    {
      email: 'luana@teste.com',
      password: '123',
      roles: ['default']
    }
  ];
  users.forEach((user) => {
    var u = Meteor.users.remove({
      "emails.address": user.email
    });
    App.soa.usuario.criarConta(user.email, user.password);
    var userAdd = App.query.usuarioPorEmail(user.email).fetch()[0] || {};
    App.soa.permissao.adicionar(userAdd._id, user.roles);

  });
}

initCategoria = function () {
  const categorias = [
    {
      _id: 'categoriaComputadoresId',
      nome: 'Computadores e periféricos',
      descricao: 'Notebook, computadores, pendrive e outros periféricos.',
      instituicaoId: "instUFGSamabaia"
    },
    {
      _id: 'categoriaDispositivosMoveis',
      nome: 'Dispositivos móveis e periféricos',
      descricao: 'Smartphones, celulares, tablets, carregador, fone de ouvido e outros periféricos.',
      instituicaoId: "instUFGSamabaia"
    },
    {
      _id: 'categoriaDocumentosPessoais',
      nome: 'Documentos pessoais',
      descricao: 'Documentos pessoais',
      instituicaoId: "instUFGSamabaia"
    },
  ];
  categorias.forEach((c) => {
    App.soa.categoria.excluir(c.instituicaoId, c._id);
    App.soa.categoria.adicionar(c.instituicaoId, c);
  })
}

initInstituicao = function () {
  var instituicao = [
    {
      _id: "instUFGSamabaia",
      nome: "UFG Samambaia"
    },
    {
      _id: "instUFGUniversitario",
      nome: "UFG Universitario"
    },
  ];
  instituicao.forEach((i) => {
    App.soa.instituicao.excluir(i._id);
    App.soa.instituicao.adicionar(i);
  });
}

initLocal = function () {
  var local = [
    {
      _id: 'localBibliotecaCampus2',
      instituicaoId: "instUFGSamabaia",
      nome: 'Biblioteca Campus 2'
    },
    {
      _id: 'localCAA',
      instituicaoId: "instUFGSamabaia",
      nome: 'Centro de Aulas Aroeira, CAA'
    },
    {
      _id: 'localCAB',
      instituicaoId: "instUFGSamabaia",
      nome: 'Centro de Aulas Baru, CAB'
    },
    {
      _id: 'localCAC',
      instituicaoId: "instUFGSamabaia",
      nome: 'Centro de Aulas Caraíba, CAC'
    },
    {
      _id: 'localINF',
      instituicaoId: "instUFGSamabaia",
      nome: 'Instituto de Informática, INF'
    },
    {
      _id: 'localRUCampus2',
      instituicaoId: "instUFGSamabaia",
      nome: 'Restaurante Universitário Campus 2, RU'
    },
    {
      _id: 'localIFaculadeHistoria',
      instituicaoId: "instUFGSamabaia",
      nome: 'Faculdade de História, FH'
    },
  ];
  local.forEach((l) => {
    App.soa.local.excluir(l.instituicaoId, l._id);
    App.soa.local.adicionar(l.instituicaoId, l);
  })
}

initContato = function () {
  var usuarioSuper = App.query.usuarioPorEmail('gislainycrisostomo@gmail.com').fetch()[0] || {};
  var usuarioIdSuper = usuarioSuper && usuarioSuper._id;
  var usuarioDefault = App.query.usuarioPorEmail('gislainy@outlook.com').fetch()[0] || {};
  var usuarioDefaultId = usuarioDefault && usuarioDefault._id;
  var contato = [
    {
      _id: 'contatoSuperId',
      usuarioId: usuarioIdSuper,
      emails: [
        {
          address: 'gislainycrisostomo@gmail.com'
        }
      ],
      telefones: [
        {
          numero: '62993014263'
        }
      ],
      redeSocial: [
        {
          url: 'https://www.facebook.com/GislainyCrisostomo',
          nick: 'Gislainy Crisóstomo',
          tipo: App.enum.redeSocial.FACEBOOK
        }
      ]
    },
    {
      _id: 'contatoDefaultId',
      usuarioId: usuarioDefaultId,
      emails: [
        {
          address: 'gislainy@outlook.com'
        }
      ],
      telefones: [
        {
          numero: '62993014263'
        }
      ],
      redeSocial: [
        {
          url: 'https://www.facebook.com/GislainyCrisostomo',
          nick: 'Gislainy Crisóstomo',
          tipo: App.enum.redeSocial.FACEBOOK
        }
      ]
    },
  ];
  contato.forEach((c) => {
    App.soa.contato.excluir(c._id);
    App.soa.contato.adicionar(c);
  })
}


initAchado = function () {
  var usuarioSuper = App.query.usuarioPorEmail('gislainycrisostomo@gmail.com').fetch()[0] || {};
  var usuarioSuperId = usuarioSuper && usuarioSuper._id;
  var usuarioDefault = App.query.usuarioPorEmail('gislainy@outlook.com').fetch()[0] || {};
  var usuarioDefaultId = usuarioDefault && usuarioDefault._id;
  var achado = [
    {
      _id: 'achadoPenDriveId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Pendrive da SanDisk vermelho',
      categoriaId: 'categoriaComputadoresId',
      localEncontradoId: 'localINF',
      contatoId: 'contatoSuperId',
      usuarioId: usuarioSuperId
    },
    {
      _id: 'achadoFoneOuvidoId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Fone de ouvido da samsung',
      categoriaId: 'categoriaDispositivosMoveis',
      localEncontradoId: 'localCAA',
      localDeixadoId: 'localCAA',
      usuarioId: usuarioDefaultId
    },
    {
      _id: 'achadoCarteirinhaBibliotecaId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Fone de ouvido da samsung, com uma bolsinha vermelha e carteirinha da biblioteca',
      categoriaId: 'categoriaDocumentosPessoais',
      localEncontradoId: 'localRUCampus2',
      contatoId: 'contatoDefaultId',
      usuarioId: usuarioDefaultId
    },
  ];
  achado.forEach((a) => {
    App.soa.achado.excluir(a.instituicaoId, a._id);
    App.soa.achado.adicionar(a.instituicaoId, a);
  })
}
initPerdido = function () {
  var usuarioSuper = App.query.usuarioPorEmail('gislainycrisostomo@gmail.com').fetch()[0] || {};
  var usuarioSuperId = usuarioSuper && usuarioSuper._id;
  var usuarioDefault = App.query.usuarioPorEmail('gislainy@outlook.com').fetch()[0] || {};
  var usuarioDefaultId = usuarioDefault && usuarioDefault._id;
  var perdido = [
    {
      _id: 'perdidoPenDriveId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Pendrive da SanDisk vermelho',
      categoriaId: 'categoriaComputadoresId',
      localPerdidoId: 'localINF',
      contatoId: 'contatoSuperId',
      usuarioId: usuarioSuperId
    },
    {
      _id: 'perdidoFoneOuvidoId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Fone de ouvido da samsung',
      categoriaId: 'categoriaDispositivosMoveis',
      localPerdidoId: 'localCAA',
      usuarioId: usuarioDefaultId
    },
    {
      _id: 'perdidoCarteirinhaBibliotecaId',
      instituicaoId: 'instUFGSamabaia',
      descricao: 'Fone de ouvido da samsung, com uma bolsinha vermelha e carteirinha da biblioteca',
      categoriaId: 'categoriaDocumentosPessoais',
      localPerdidoId: 'localRUCampus2',
      contatoId: 'contatoDefaultId',
      usuarioId: usuarioDefaultId
    },
  ];
  perdido.forEach((a) => {
    App.soa.perdido.excluir(a.instituicaoId, a._id);
    App.soa.perdido.adicionar(a.instituicaoId, a);
  })
}