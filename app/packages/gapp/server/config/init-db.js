Meteor.startup(function () {
  declareRules();
});

initdb = function () {
  dropCollections();
  initInstituicao();
  initLocal();
  initUsuario();
  initContato();
  initCategoria();
  initAchado();
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
      password: '123',
      roles: ['super']
    },
    {
      email: 'gislainy@outlook.com',
      password: '123',
      roles: ['default']
    }
  ];
  users.forEach((user) => {
    var u = Meteor.users.findOne({
      "emails.address": user.email
    });
    if (u == null) {
      var userId = App.soa.usuario.criarConta(user.email, user.password);
      App.soa.permissao.adicionar(userId, user.roles);
    } else {
      App.soa.permissao.adicionar(u._id, user.roles);
    }
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
    App.soa.achado.adicionar(a.instituicaoId, a);
  })
}