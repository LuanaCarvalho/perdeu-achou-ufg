Template.theme_header.events({
    'click .sair': function (event, templateInstance) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
})

Template.theme_header.helpers({
    nomeMenu() {
        return App.apptitle.menu;
    }
})

Meteor.autorun(function () {
    document.title = App.apptitle.text || 'Perdeu? Achou! UFG';
});