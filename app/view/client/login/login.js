// import { Template } from 'meteor/templating'

Template.login.events({
  'click .login': function (event, templateInstance) {
    var email = qs('#email').value;
    var password = qs('#password').value
    if (email && password) {
      Meteor.loginWithPassword(email, password, function (err) {
        if (!err) Router.go('/');
      });
    }
  },
  'click .btnFacebook': function (event) {
    Meteor.loginWithFacebook({}, function (err) {
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
      else Router.go('/');
    });
  },
  'click .btnGoogle': function (event) {
    Meteor.loginWithGoogle({}, function (err) {
      if (err) {
        throw new Meteor.Error("Facebook login failed");
      }
      else Router.go('/');
    });
  },
  'click .esqueciSenha': function (event) {
    var email = $('[name=email]').val();
    var options = {};
    options.email = email;
    Accounts.forgotPassword(options, function (err) {
      if (err) {
        console.log(err.reason);
      } else {
        alert('Enviamos um e-mail para ' + email + ' de definição de senha!');
      }
    });
  },
});

