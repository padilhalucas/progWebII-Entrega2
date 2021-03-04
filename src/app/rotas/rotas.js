const ProdDAO = require('../dao/prodDAO')
const database = require('../../config/database')
prodDAO = new ProdDAO(database)
const ProdController = require('../controller/prodController')
prodController = new ProdController()

module.exports = (app) => {


    app.get('/prod', prodController.listarProdutos())

    app.get('/prod/:id', prodController.listarProduto())

    app.get('/prodN/:name', prodController.listarProdutoNome())

    app.post('/prod', prodController.addProd())

    app.delete('/prod/:id', prodController.remover())

    app.put('/prod', prodController.atualizarNome())

    app.put('/prod/preco', prodController.atualizarPreco())
}