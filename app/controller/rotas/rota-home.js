appDeclareRoute({
    url: '/',
    search: '/',
    role: 'default',
    template: 'home',
    subscriptions() {
        Meteor.subscribe('contatoPorUsuarioId', Meteor.userId());
    },
    title() {
        return 'Home';
    }
});