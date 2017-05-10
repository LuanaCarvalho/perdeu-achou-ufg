appDeclareService('perdido', {
    adicionar: function() {
        App.db.perdido.insert({
            descricao: 'teste de adicionar 1'
        })
    }
})

App.soa.perdido.adicionar()