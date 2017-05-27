Meteor.methods({
    'usuario.criarconta': function (email, password) {
        return Accounts.createUser({
            email: email,
            password: password
        });
    }
})