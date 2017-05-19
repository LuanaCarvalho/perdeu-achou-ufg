// Router.onBeforeAction(function () {
//   if (!Meteor.userId()) {
//     var correntRouter = Router.current().route.getName()
//     if(correntRouter === 'criarconta')
//       this.render('criarContaUsuario')
//     else this.render('login');
//   } else {
//     this.next();
//   }
// });;

Router.route('/', {
  template: 'main'
});
Router.route('/criarconta', {
  template: 'criarContaUsuario'
});
