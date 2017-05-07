// import { Template } from 'meteor/templating'

Template.login.events({
  'click .login': function(event, templateInstance) {
    var email = qs('email').value;
    var password = qs('password').value
    if(email && password) {
      Meteor.loginWithPassword(email, password);
    }
  }
});

Template.criarContaUsuario.events({
  'click .criarConta': function(event, templateInstance) {
    var email = qs('email').value;
    var password = qs('password').value
    if(email && password) {
      Accounts.createUser({
           email: email,
           password: password
       });
    }
  }
});
