appDeclareService('achado', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    dados.dataCadastro = dados.dataCadastro || new Date();
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    dados.situacao = dados.situacao || App.enum.situacaoObjeto.CADASTRADO;
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
  solucionar: function (instituicaoId, achadoId, usuarioDonoId) {
    var dados = {
      usuarioDonoId,
      situacao: App.enum.situacaoObjeto.SOLUCIONADO
    };
    return App.db.achado.update({
      _id: achadoId,
      instituicaoId
    },
      {
        $set: dados
      });
  },
  enviarEmail: function (instituicaoId, achadoId, donoId) {
    var achado = App.query.achadoPorId(instituicaoId, achadoId).fetch()[0];
    if (!achado) throw new Meteor.Error('Não existe nenhum cadastro com esse id');
    var usuarioId = achado.usuarioId;
    var usuario = App.query.usuarioPorId(usuarioId).fetch()[0];
    var dono = App.query.usuarioPorId(donoId).fetch()[0];
    var contatoDono = App.query.contatoPorUsuarioId(donoId).fetch()[0];
    if (!usuario) throw new Meteor.Error('Não encontrado o usuarioId desse cadastrado');
    var email = usuario.emails[0].address;
    var from = 'perdeuachou.ufg@gmail.com';
    var subject = 'O objeto cadastrado foi encontrado o dono - Perdeu! Achou!';
    var text = 'Olá,\nO objeto cadastrado com as seguints descrição: \n\n ->' + achado.descricao + '\n\nAparetemente pertence ao usuário' + dono.profile.name + '\n\nVocê pode entrar em contato com ele para entregar o objeto através das informações abaixo: \n\n' + informacoesDeContatoDoUsuarioDono(contatoDono) + '\n\n\nEquipe Perdeu? Achou!';
    Meteor.call('sendEmail', email, from, subject, text);
  },
})

function informacoesDeContatoDoUsuarioDono(contato) {
  if(!contato) return 'Não temos informações de contato :('
  var emails = contato.emails.map((email) => email.address).join('');
  var redeSocial = contato.redeSocial.map((rede) => rede.url).join('\n');
  var telefones = contato.telefones.map((telefone) => telefone.numero).join('');
  return 'Email: ' + emails + '\nTelefone: '+ telefones + '\nRede sociais: ' + redeSocial;
}
