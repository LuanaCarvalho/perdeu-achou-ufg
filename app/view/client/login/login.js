// import { Template } from 'meteor/templating'

Template.login.events({
  'click .fazerLogin': function (event, templateInstance) {
    var email = qs('#email').value;
    var password = qs('#password').value
    if (email && password) {
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          swal('Oops...a', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
        }
        else Router.go('/');
      });
    }
  },
  'click .btnFacebook': function (event) {
    Meteor.loginWithFacebook({}, function (err) {
      if (err) {
        swal('Oops...b', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
      }
      else Router.go('/');
    });
  },
  'click .btnGoogle': function (event) {
    Meteor.loginWithGoogle({}, function (err) {
      if (err) {
        swal('Oops...c  ', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
      }
      else Router.go('/');
    });
  },
});

