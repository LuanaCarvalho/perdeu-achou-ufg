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
          return App.query.localPorId(instituicaoId, achado.localId);

        }
      },
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
          console.log(achado)
          console.log(App.query.usuarioPorId(instituicaoId, achado.usuarioId).fetch())
          return App.query.usuarioPorId(instituicaoId, achado.usuarioId);
        },
      },
      {
        find(achado) {
          return App.query.contatoPorId(achado.contatoId);
        }
      },
    ]
  }
});