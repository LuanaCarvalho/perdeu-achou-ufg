appDeclareRoute({
    url: '/categoria',
    search: '/',
    role: 'super',
    template: 'categoriaList',
    title() {
        return 'Categoria';
    },
    subscriptions: function () {
        return Meteor.subscribe('categoriaList');
    },
    data() {
        debugger
        var categoria = App.query.categoriaList().fetch();
        return {
            categoria
        }
    }
});
