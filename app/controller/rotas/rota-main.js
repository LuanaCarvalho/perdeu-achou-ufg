appDeclareRoute({
  url: '/login',
  search: '/',
  role: 'public',
  template: 'login',
  layoutTemplate: 'blankLayout',
  title() {
    return 'Login';
  }
});


appDeclareRoute({
  url: '/criarconta',
  search: '/',
  role: 'public',
  template: 'criarContaUsuario',
  layoutTemplate: 'blankLayout',
  title() {
    return 'Criar conta';
  }
});
appDeclareRoute({
  url: '/esqueciasenha',
  search: '/',
  role: 'public',
  template: 'esqueceuSenha',
  layoutTemplate: 'blankLayout',
  title() {
    return 'Esqueceu a senha';
  }
});