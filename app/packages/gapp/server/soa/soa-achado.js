appDeclareService('achado', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    return App.db.achado.insert(dados);
  },
  alterar: function (instituicaoId, achadoId, dados) {
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    return App.db.achado.update({
      _id: achadoId,
      instituicaoId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId, achadoId) {
    return App.db.achado.remove({ _id: achadoId, instituicaoId });
  },
})
