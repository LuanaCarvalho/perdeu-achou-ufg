Template.theme_menu.helpers({
    menu() {
        return _menu;
    },
    nomeUsuario() {
        return App.state.usuario.profile.name;
    }
})

var _menu = [
    {
        icon: 'home',
        name: 'Home'
    }
]

Template.theme_menu.events({
    'click .sair': function (event, templateInstance) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
})