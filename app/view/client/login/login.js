// import { Template } from 'meteor/templating'

Template.login.events({
  'click .login': function (event, templateInstance) {
    debugger
    var email = qs('#email').value;
    var password = qs('#password').value
    if (email && password) {
      Meteor.loginWithPassword(email, password, function (err) {
        if(!err) Router.go('/');
      });
    }
  }
});

Template.criarContaUsuario.events({
  'click .criarConta': function (event, templateInstance) {
    debugger
    var email = qs('#email').value;
    var password = qs('#password').value
    if (email && password) {
      Meteor.call('usuario.criarconta', email, password,function (err) {
        if (!err) Meteor.loginWithPassword(email, password);
      })
    }
  }
});
