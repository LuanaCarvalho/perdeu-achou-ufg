Template.criarContaUsuario.events({
    'click .criarConta': function (event, templateInstance) {
        var nome = qs('#nome').value;
        var email = qs('#email').value;
        var password = qs('#password').value
        if (nome && email && password) {
            Meteor.call('usuario.criarconta', email, password, function (err, userId) {
                if (!err) {
                    Meteor.loginWithPassword(email, password, function (err) {
                        Meteor.call('permissao.adicionar', Meteor.userId(), ['default'], function (err) {
                            if (!err) {
                                Meteor.call('usuario.nome', Meteor.userId(), nome, function (err) {
                                    if (!err) {
                                        Router.go('/');
                                    }
                                });
                            }
                        });
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
            if (err) {
                swal('Oops...', 'Ocorreu um erro durante o login, tente novamente.!', 'error');
            }
            else {
                Meteor.call('permissao.adicionar', Meteor.userId(), ['default'], function (err) {
                    if (!err) {
                        Router.go('/');
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
                Meteor.call('permissao.adicionar', Meteor.userId(), ['default'], function (err) {
                    if (!err) {
                        Router.go('/');
                    }
                });
            }
        });
    },
});
