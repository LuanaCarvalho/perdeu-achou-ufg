appDeclareQuery({
  name: 'usuarioLogado',
  collection: 'users',
  /*sort: ['data'],*/
  fn: function (userId) {
    return Meteor.users.find({ _id: userId });
  }
});
