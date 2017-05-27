Template.criarContaUsuario.events({
    'click .criarConta': function (event, templateInstance) {
        var email = qs('#email').value;
        var password = qs('#password').value
        if (email && password) {
            Meteor.call('usuario.criarconta', email, password, function (err) {
                if (!err) {
                    Meteor.loginWithPassword(email, password);
                    Router.go('/');
                }
            })
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
});
