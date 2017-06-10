
Template.contatoFormComponentesTelefone.helpers({
  add() {
    return this.add ? 'add' : 'delete';
  },
});

Template.contatoFormComponentesEmail.helpers({
  add() {
    return this.add ? 'add' : 'delete';
  },
});

Template.contatoFormComponentesRedeSocial.helpers({
  add() {
    return this.add ? 'add' : 'delete';
  },
  tipoRedeSocial() {
    var def = App.enum.redeSocial.def();
    var ret = [];
    Object.keys(def).forEach((d) => {
      ret.push(def[d]);
    });
    return ret;
  },
  tipo() {
    return Template.instance().data.tipo
  }
});
