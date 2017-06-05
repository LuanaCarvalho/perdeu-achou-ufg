Meteor.methods({
    'usuario.criarconta': function (email, password) {
        return App.soa.usuario.criarConta(email, password);
    }
})