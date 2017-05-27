appDeclareService('usuario', {
  criarConta: function (email, password) {
    const usuarioAdd = Accounts.createUser({
      email: email,
      password: password
    });
  }
})


