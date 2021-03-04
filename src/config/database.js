const mysql = require('mysql')

var con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root'
})

con.connect(function(erro){
    if(erro) throw erro
    console.log('Conectado ao MySQL')

})

con.query('use loja;', function(error,resultado){
    if(error) throw error
    console.log(resultado)
})

module.exports = con