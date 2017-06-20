Meteor.publishComposite('perdidoList', function (instituicaoId) {
  return {
    find() {
      return App.query.perdidoList(instituicaoId);
    },
    children: [
      {
        find(perdido) {
          return App.query.categoriaPorId(instituicaoId, perdido.categoriaId);

        }
      },
      {
        find(perdido) {
          return App.query.localPorId(instituicaoId, perdido.localEncontradoId);

        }
      },
      {
        find(perdido) {
          return App.query.contatoPorUsuarioId(perdido.usuarioId);

        }
      },
    ]
  }
});
Meteor.publishComposite('meusPerdidosList', function (instituicaoId, usuarioId) {
  return {
    find() {
      return App.query.meusPerdidosList(instituicaoId, usuarioId);
    },
    children: [
      {
        find(perdido) {
          return App.query.categoriaPorId(instituicaoId, perdido.categoriaId);

        }
      },
      {
        find(perdido) {
          return App.query.localPorId(instituicaoId, perdido.localEncontradoId);

        }
      },
      {
        find(perdido) {
          return App.query.contatoPorUsuarioId(perdido.usuarioId);

        }
      },
    ]
  }
});
Meteor.publishComposite('perdidoAdd', function (instituicaoId, usuarioId) {
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

Meteor.publishComposite('perdidoPorId', function (instituicaoId, perdidoId) {
  return {
    find() {
      return App.query.perdidoPorId(instituicaoId, perdidoId);
    },
    children: [
      {
        find(perdido) {
          return App.query.categoriaPorId(instituicaoId, perdido.categoriaId);

        },
      },
      {
        find(perdido) {
          return App.query.localPorId(instituicaoId, perdido.localEncontradoId);

        },
      },
      {
        find(perdido) {
          return App.query.localPorId(instituicaoId, perdido.localDeixadoId);
        },
      },
      {
        find(perdido) {
          return App.query.usuarioPorId(instituicaoId, perdido.usuarioId);
        },
      },
      {
        find(perdido) {
          return App.query.contatoPorId(perdido.contatoId);
        }
      },
      {
        find(perdido) {
          return App.query.categoriaList(instituicaoId);
        }
      },
      {
        find(perdido) {
          return App.query.localList(instituicaoId);
        }
      },
    ]
  }
});