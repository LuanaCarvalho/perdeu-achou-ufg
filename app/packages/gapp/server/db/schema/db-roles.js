declareRules = function () {
  App.soa.permissao.declarar2('super');
  App.soa.permissao.declarar('default');
  App.soa.permissao.declarar('relatorio', ['adicionar', 'alterar', 'excluir']);
}