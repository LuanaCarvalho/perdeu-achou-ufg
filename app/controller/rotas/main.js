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
  url: '/',
  search: '/',
  role: 'public',
  template: 'main',
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