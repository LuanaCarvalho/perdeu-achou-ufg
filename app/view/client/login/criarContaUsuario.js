Template.criarContaUsuario.events({
    'click .criarConta': function (event, templateInstance) {
        debugger
        var email = qs('#email').value;
        var password = qs('#password').value
        if (email && password) {
            Meteor.call('usuario.criarconta', email, password, function (err, userId) {
                if (!err) {
                    Meteor.call('perrmisao', userId, ['default'], function (err) {
                        if (!err) {
                            Meteor.loginWithPassword(email, password);
                            Router.uo('/');
                        }
                    });
                } else {
                    if (err.reason === 'Email already exists.')
                        swal('Oops...', 'Esse e-mail já foi cadastrado. Caso não lembre a essa, acesse a opção de lembrar senha!', 'error');
                }
            })
        }
    },
    'click .btnFacebook': function (event) {
        Meteor.loginWithFacebook({}, function (err, userId) {
            debugger
            if (err) {
                swal('Oops...', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
            }
            else {
                Meteor.call('perrmisao', Meteor.userId(), ['default'], function (err) {
                    if (!err) {
                        Router.uo('/');
                    }
                });
            }
        });
    },
    'click .btnGoogle': function (event) {
        Meteor.loginWithGoogle({}, function (err, userId) {
            if (err) {
                swal('Oops...', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
            }
            else {
                Meteor.call('perrmisao', Meteor.userId(), ['default'], function (err) {
                    if (!err) {
                        Router.uo('/');
                    }
                });
            }
        });
    },
});
