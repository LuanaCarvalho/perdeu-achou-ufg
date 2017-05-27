appDeclareRoute({
  url: '/login',
  search: '/',
  role: 'public',
  template: 'login',
  layoutTemplate: 'blankLayout',
  title() {
    return '';
  }
});


appDeclareRoute({
  url: '/criarconta',
  search: '/',
  role: 'public',
  template: 'criarContaUsuario',
  layoutTemplate: 'blankLayout',
  title() {
    return '';
  }
});
appDeclareRoute({
  url: '/esqueciasenha',
  search: '/',
  role: 'public',
  template: 'esqueceuSenha',
  layoutTemplate: 'blankLayout',
  title() {
    return '';
  }
});