Template.theme_menu.helpers({
    menu() {
        return _menu;
    },
    nomeUsuario() {
        return App.state.usuario && App.state.usuario.profile && App.state.usuario.profile.name;
    }
})

var _menu = [
    {
        icon: 'home',
        name: 'Home',
        url: '/',
        roles: 'default'
    },
    {
        icon: 'home',
        name: 'Categoria',
        url: '/categoria',
        roles: 'super'
    },
    {
        icon: 'stars',
        name: 'Achados',
        url: '/achado',
        roles: 'default'
    },
    {
        icon: 'error',
        name: 'Perdidos',
        url: '/perdido',
        roles: 'default'
    },
    {
        icon: 'stars',
        name: 'Meus perdidos',
        url: '/meusperdidos',
        roles: 'default'
    },
    {
        icon: 'error',
        name: 'Meus achados',
        url: '/meusachados',
        roles: 'default'
    },

]

Template.theme_menu.events({
    'click .sair': function (event, templateInstance) {
        event.preventDefault();
        Meteor.logout();
        appRoute('/');
    },
    'click .menuItem': function (event, templateInstance) {
        event.preventDefault();
        appRoute(this.url);
    },

})