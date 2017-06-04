Meteor.publish('usuarioPorEmail', function (email) {
    return App.query.usuarioPorEmail(email);
});