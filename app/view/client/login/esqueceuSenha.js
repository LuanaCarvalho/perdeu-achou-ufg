// import { Template } from 'meteor/templating'

Template.esqueceuSenha.events({
  'click .esqueceuSenha': function (event) {
    var email = qs('#email').value;
    var options = {};
    options.email = email;
    Accounts.forgotPassword(options, function (err) {
      if (err) {
        swal('Oops...', 'Ocorreu um erro durante o processo, tente novamente.!', 'error');
      } else {
        swal('Ebaa...', 'Enviamos um e-mail para ' + email + ' de redefinição de senha /o\\', 'sucess');
      }
    });
  },
});

