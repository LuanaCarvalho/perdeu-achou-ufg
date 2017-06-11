var _acrescentarPermissoes = {};
var _destacarPermissoes = {};

appDeclareService('permissao', {
  adicionar: function (userId, permissoes) {
    console.log(userId)
    return Roles.addUsersToRoles(userId, permissoes);
  },
  _declarar: function (role, subroles, acrescentarPermissoes, destaque) {
    _acrescentarPermissoes[role] = acrescentarPermissoes || [];
    _destacarPermissoes[role] = destaque;
    if (Meteor.isServer && !Meteor.roles.find({ name: role }).count())
      Meteor.roles.insert({ _id: role, name: role });
    if (subroles) {
      subroles.forEach(function (subrole) {
        var srole = role + '.' + subrole;
        _acrescentarPermissoes[srole] = [];
        if (!Meteor.roles.find({ name: srole }).count())
          Meteor.roles.insert({ _id: srole, name: srole });
      });
    }
  },
  declarar: function (role, subroles, acrescentarPermissoes) {
    App.soa.permissao._declarar(role, subroles, acrescentarPermissoes, false);
  },
  declarar2: function (role, subroles, acrescentarPermissoes) {
    App.soa.permissao._declarar(role, subroles, acrescentarPermissoes, true);
  },
})


