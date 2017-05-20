Template.theme_header.events({
    'click .sair': function (event, templateInstance) {
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
})