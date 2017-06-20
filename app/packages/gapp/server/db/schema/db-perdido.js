appDeclareCollection('perdido', {
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
  localPerdidoId: {
    type: String,
    label: "Local encontrado",
  },
  contatoId: {
    type: String,
    label: "Contato do usuário",
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
  usuarioDonoId: {
    type: String,
    label: "Usuário dono",
    optional: true
  },
})

