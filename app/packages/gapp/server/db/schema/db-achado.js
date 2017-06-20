appDeclareEnum('situacaoObjeto', {
  CADASTRADO: {
    value: 1,
    name: 'Aguardando'
  },
  AGUARDANDO: {
    value: 2,
    name: 'Aguardando'
  },
  SOLUCIONADO: {
    value: 3,
    name: 'Solucionado'
  },
  ARQUIVADO: {
    value: 4,
    name: 'Arquivado'
  },
});


appDeclareCollection('achado', {
  instituicaoId: {
    type: String,
    label: "Institução"
  },
  descricao: {
    type: String,
    label: "Descrição"
  },
  categoriaId: {
    type: String,
    label: "Categoria"
  },
  localEncontradoId: {
    type: String,
    label: "Local encontrado",
  },
  localDeixadoId: {
    type: String,
    label: "Local encontrado",
    optional: true
  },
  contatoId: {
    type: String,
    label: "Contato do usuário",
    optional: true
  },
  usuarioDonoId: {
    type: String,
    label: "Usuário dono",
    optional: true
  },
  usuarioId: {
    type: String,
    label: "Usuário que adicionou"
  },
  dataCadastro: {
    type: Date,
    label: "Data que foi cadastrado"
  },
  situacao: {
    type: Number,
    label: "Situação",
    allowedValues: App.enum.situacaoObjeto.values,
  },
})

