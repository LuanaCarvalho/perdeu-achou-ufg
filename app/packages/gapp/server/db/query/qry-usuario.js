appDeclareQuery({
  name: 'usuarioLogado',
  collection: 'users',
  /*sort: ['data'],*/
  fn: function (userId) {
    return Meteor.users.find({ _id: userId });
  }
});
appDeclareQuery({
  name: 'usuarioPorEmail',
  collection: 'users',
  /*sort: ['data'],*/
  fn: function (email) {
    return Meteor.users.find(
      {
        "emails.address": email
      }
    );
  }
});
appDeclareQuery({
  name: 'usuarioPorId',
  collection: 'users',
  debug: true,
  /*sort: ['data'],*/
  fn: function (usuarioId) {
    return Meteor.users.find({
      _id: usuarioId
    });
  }
});
