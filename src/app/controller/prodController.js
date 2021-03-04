

class ProdControler{

    listarProdutos(){
       return function(req, resp){
            prodDAO.getProdutos().then(result => resp.json(result).catch(err => resp.json(err)))
        }
    }

    listarProduto(){
        return function(req,resp){
            prodDAO.getProduto(req.params.id).then(result => resp.json(result).catch(err => resp.json(err)))
        }
    }

    listarProdutoNome(){
        return function(req,resp){
        
            prodDAO.getProdutoNome(req.params.name).then(result => resp.json(result).catch(err => resp.json(err)))
        }
    }

    addProd(){
        return function(req,resp){
            this.prodDAO.addProd(req.body).then(result => resp.json(result).catch(err => resp.json(err)))
    
        }
    }

    remover(){
        return function(req,resp){
            this.prodDAO.removeProd(req.params.id).then(result => resp.json(result).catch(err => resp.json(err)))
        }

    }

    atualizarNome(){
       return function(req,resp){
            this.prodDAO.atualizaProd(req.body).then(result => resp.json(result).catch(err => resp.json(err)))
        }

    }

    atualizarPreco(){
        return function(req,resp){
            this.prodDAO.atualizaProdPreco(req.body).then(result => resp.json(result).catch(err => resp.json(err)))
        }
    }
}

module.exports = ProdControler