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
  }
})

