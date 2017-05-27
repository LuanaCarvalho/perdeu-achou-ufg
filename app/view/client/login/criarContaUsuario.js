Template.criarContaUsuario.events({
    'click .criarConta': function (event, templateInstance) {
        debugger
        var email = qs('#email').value;
        var password = qs('#password').value
        if (email && password) {
            Meteor.call('usuario.criarconta', email, password, function (err) {
                if (!err) {
                    Meteor.loginWithPassword(email, password);
                    Router.go('/');
                } else {
                    if(err.reason === 'Email already exists.')
                    swal('Oops...', 'Esse e-mail já foi cadastrado. Caso não lembre a essa, acesse a opção de lembrar senha!', 'error');
                }
            })
        }
    },
    'click .btnFacebook': function (event) {
        Meteor.loginWithFacebook({}, function (err) {
            if (err) {
                swal('Oops...', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
            }
            else Router.go('/');
        });
    },
    'click .btnGoogle': function (event) {
        Meteor.loginWithGoogle({}, function (err) {
            if (err) {
                swal('Oops...', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
            }
            else Router.go('/');
        });
    },
});
