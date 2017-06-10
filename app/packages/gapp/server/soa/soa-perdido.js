appDeclareService('perdido', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    return App.db.perdido.insert(dados);
  },
  alterar: function (instituicaoId, perdidoId, dados) {
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    return App.db.perdido.update({
      _id: perdidoId,
      instituicaoId
    },
      {
        $set: dados
      });
  },
  excluir: function (instituicaoId, perdidoId) {
    return App.db.perdido.remove({ _id: perdidoId, instituicaoId });
  },
})
