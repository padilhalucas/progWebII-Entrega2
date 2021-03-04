class ProdDAO{
    obj_erro = {status: 'erro'}
    obj_sucesso = {status: 'sucesso'}

    constructor(database){
        this.database = database
    }
    
    getProdutos(){
        return new Promise((resolve,reject) =>{
            this.database.query('select * from produtos;', (erro,resposta) =>{
                if(erro) return reject(erro)
                return resolve(resposta)
            }
        )
        
        })
    }

    getProduto(prod){
        return new Promise((resolve,reject) => {
            this.database.query(`select * from produtos where produtos.id_produto = "${prod}";`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(resposta)
            })

        })
    }
    getProdutoNome(prod){
        return new Promise((resolve,reject) => {
            this.database.query(`select * from produtos where produtos.nome = "${prod}";`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(resposta)
            })

        })
    }


    addProd(dados){
        return new Promise((resolve,reject) => {
            this.database.query(`insert into produtos values (${dados.id_produto}, "${dados.nome}", "${dados.preco}")`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(this.obj_sucesso)
            })

        })
    }

    atualizaProd(dados){
        return new Promise((resolve,reject) => {
            this.database.query(`update produtos set nome = '${dados.nome}' where produtos.id_produto = ${dados.id_produto}`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(this.obj_sucesso)
            })

        })

    }
    atualizaProdPreco(dados){
        return new Promise((resolve,reject) => {
            this.database.query(`update produtos set preco = '${dados.preco}' where produtos.id_produto = ${dados.id_produto}`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(this.obj_sucesso)
            })

        })

    }

    removeProd(prod){
        return new Promise((resolve,reject) => {
            this.database.query(`DELETE FROM produtos WHERE produtos.id_produto = '${prod}'`, (erro, resposta) =>{
                if(erro) return reject(erro)
                return resolve(this.obj_sucesso)
            })

        })

    }


}

module.exports = ProdDAO