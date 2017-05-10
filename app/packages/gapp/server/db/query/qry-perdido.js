appDeclareQuery({
    name: 'perdidoList',
    collection: 'perdido',
    /*sort: ['data'],*/
    fn: function () {
        return App.db.perdido.find({});
    }
});
