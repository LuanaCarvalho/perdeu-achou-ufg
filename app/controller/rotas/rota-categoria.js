appDeclareRoute({
    url: '/categoria',
    search: '/',
    role: 'super',
    template: 'categoriaList',
    title() {
        return 'Categoria';
    },
    subscriptions: function () {
        return Meteor.subscribe('categoriaList', 'instUFGSamabaia');
    },
    data() {
        var categoria = App.query.categoriaList('instUFGSamabaia').fetch();
        return {
            categoria
        }
    }
});
appDeclareRoute({
    url: '/categoria/adicionar',
    search: '/',
    role: 'super',
    template: 'categoriaAdd',
    title() {
        return 'Adicionar categoria';
    },
    data() {

    }
});
appDeclareRoute({
    url: '/categoria/:_categoriaId',
    search: '/',
    role: 'super',
    template: 'categoriaEdit',
    title() {
        return 'Editar categoria';
    },
    subscriptions: function () {
        return Meteor.subscribe('categoriaPorId', this.params._categoriaId);
    },
    data() {
        var categoria = App.query.categoriaPorId('categoriaPorId', this.params._categoriaId).fetch()[0];
        if (categoria)
            return {
                categoria
            }
    }
});
