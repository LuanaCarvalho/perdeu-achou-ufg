appDeclareService('perdido', {
  adicionar: function (instituicaoId, dados) {
    dados.instituicaoId = instituicaoId;
    dados.usuarioId = dados.usuarioId || Meteor.userId();
    dados.dataCadastro = dados.dataCadastro || new Date();
    dados.situacao = dados.situacao || App.enum.situacaoObjeto.CADASTRADO;
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
  enviarEmail: function (instituicaoId, perdidoId, pessoaQueEncontrouId) {
    var perdido = App.query.perdidoPorId(instituicaoId, perdidoId).fetch()[0];
    if (!perdido) throw new Meteor.Error('Não existe nenhum cadastro com esse id');
    var usuarioId = perdido.usuarioId;
    var usuario = App.query.usuarioPorId(usuarioId).fetch()[0];
    var pessoaQueEncontrou = App.query.usuarioPorId(pessoaQueEncontrouId).fetch()[0];
    var contatoPessoaQueEncontrou = App.query.contatoPorUsuarioId(pessoaQueEncontrouId).fetch()[0];
    if (!usuario) throw new Meteor.Error('Não encontrado o usuarioId desse cadastrado');
    var email = usuario.emails[0].address;
    var from = 'perdeuachou.ufg@gmail.com';
    var subject = 'O objeto cadastrado foi encontrado - Perdeu! Achou!';
    var text = 'Olá,\nO objeto cadastrado com as seguints descrição: \n\n ->' + perdido.descricao + '\n\nAparetemente está com o usuário' + pessoaQueEncontrou.profile.name + '\n\nVocê pode entrar em contato com ele para entregar o objeto através das informações abaixo: \n\n' + informacoesDeContatoDoUsuarioDono(contatoPessoaQueEncontrou) + '\n\n\nEquipe Perdeu? Achou!';
    Meteor.call('sendEmail', email, from, subject, text);
    return App.soa.perdido.entrarEmContato(instituicaoId, perdidoId);
  },
  entrarEmContato: function (instituicaoId, perdidoId) {
    return App.db.perdido.update({
      _id: perdidoId,
      instituicaoId
    }, {
        $set: {
          dataContato: new Date()
        }
      })
  }
})

function informacoesDeContatoDoUsuarioDono(contato) {
  if (!contato) return 'Não temos informações de contato :('
  var emails = contato.emails.map((email) => email.address).join('');
  var redeSocial = contato.redeSocial.map((rede) => rede.url).join('\n');
  var telefones = contato.telefones.map((telefone) => telefone.numero).join('');
  return 'Email: ' + emails + '\nTelefone: ' + telefones + '\nRede sociais: ' + redeSocial;
}