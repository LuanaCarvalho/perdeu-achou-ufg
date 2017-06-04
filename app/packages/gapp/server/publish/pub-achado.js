Meteor.publish('achadoList', function (instituicaoId) {
  console.log('instituicaoId 1', instituicaoId)
  return App.query.achadoList(instituicaoId);
});
Meteor.publish('achadoPorId', function (instituicaoId, achadoId) {
  return App.query.achadoPorId(instituicaoId, achadoId);
});


Meteor.publishComposite('achadoList2', function (instituicaoId) {
  return {
    find(instituicaoId) {
      instituicaoId = 'instUFGSamabaia';
      return App.query.achadoList(instituicaoId);
    },
    children: [
      {
        find(achado) {
          // console.log('achado', achado)
          return App.query.categoriaPorId(instituicaoId, achado.categoriaId);

        }
      },
      {
        find(achado) {
          // console.log('achado', achado)
          return App.query.localPorId(instituicaoId, achado.localId);

        }
      },
    ]
  }
});