appDeclareEnum('redeSocial', {
  FACEBOOK: {
    value: 1,
    name: 'Facebook'
  },
  GOOGLE: {
    value: 2,
    name: 'Google'
  },
  LINKEDIN: {
    value: 3,
    name: 'LinkedId'
  },
});

appDeclareCollection('contato', {
  usuarioId: {
    type: String,
    label: "Usuario"
  },
  emails: {
    type: Array,
    optional: true,
    label: "Email"
  },
  'emails.$': {
    type: Object,
    optional: true
  },
  'emails.$.address': {
    type: String,
    label: "Endereço do e-mail",
    regEx: SimpleSchema.RegEx.Email,
    optional: true
  },
  telefones: {
    type: Array,
    optional: true,
    label: "Telefones"
  },
  'telefones.$': {
    type: Object,
    optional: true
  },
  'telefones.$.numero': {
    type: String,
    label: "Endereço do e-mail",
    optional: true
  },
  redeSocial: {
    type: Array,
    optional: true
  },
  'redeSocial.$': {
    type: Object,
    optional: true
  },
  'redeSocial.$.url': {
    type: String,
    label: "Link da rede social",
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  'redeSocial.$.nick': {
    type: String,
    label: "Nick da rede social",
    optional: true
  },
  'redeSocial.$.tipo': {
    type: String,
    label: "Qual rede social",
    // allowedValues: App.enum.redeSocial.values,
    optional: true
  },
})

// console.log(App.enum.redeSocial.values())