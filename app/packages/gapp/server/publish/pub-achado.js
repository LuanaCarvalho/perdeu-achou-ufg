Meteor.publish('contatoPorUsuarioId', function (usuarioId) {
  return App.query.contatoPorUsuarioId(usuarioId);
});

Meteor.publishComposite('achadoList', function (instituicaoId) {
  return {
    find() {
      return App.query.achadoList(instituicaoId);
    },
    children: [
      {
        find(achado) {
          return App.query.categoriaPorId(instituicaoId, achado.categoriaId);

        }
      },
      {
        find(achado) {
          return App.query.localPorId(instituicaoId, achado.localEncontradoId);

        }
      },
      {
        find(achado) {
          return App.query.contatoPorUsuarioId(achado.usuarioId);
        }
      },
    ]
  }
});
Meteor.publishComposite('meusAchadosList', function (instituicaoId, userId) {
  return {
    find() {
      return App.query.meusAchadosList(instituicaoId, userId);
    },
    children: [
      {
        find(achado) {
          return App.query.categoriaPorId(instituicaoId, achado.categoriaId);

        }
      },
      {
        find(achado) {
          return App.query.localPorId(instituicaoId, achado.localEncontradoId);

        }
      },
      {
        find(achado) {
          return App.query.contatoPorUsuarioId(achado.usuarioId);

        }
      },
    ]
  }
});


Meteor.publishComposite('achadoAdd', function (instituicaoId, usuarioId) {
  return {
    find() {
      return App.query.categoriaList(instituicaoId);
    },
    children: [
      {
        find() {
          return App.query.localList(instituicaoId);
        },
      },
      {
        find() {
          return App.query.contatoPorUsuarioId(usuarioId);
        },
      }
    ]
  }
});

Meteor.publishComposite('achadoPorId', function (instituicaoId, achadoId) {
  return {
    find() {
      return App.query.achadoPorId(instituicaoId, achadoId);
    },
    children: [
      {
        find(achado) {
          return App.query.categoriaPorId(instituicaoId, achado.categoriaId);

        },
      },
      {
        find(achado) {
          return App.query.localPorId(instituicaoId, achado.localEncontradoId);

        },
      },
      {
        find(achado) {
          return App.query.localPorId(instituicaoId, achado.localDeixadoId);
        },
      },
      {
        find(achado) {
          return App.query.usuarioPorId(instituicaoId, achado.usuarioId);
        },
      },
      {
        find(achado) {
          return App.query.contatoPorId(achado.contatoId);
        }
      },
      {
        find(achado) {
          return App.query.categoriaList(instituicaoId);
        }
      },
      {
        find(achado) {
          return App.query.localList(instituicaoId);
        }
      },
    ]
  }
});