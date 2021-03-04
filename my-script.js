
const botao = document.getElementById("btn1")
const campoBusca = document.getElementById("busca")
const prod = document.getElementById("sec-sec-produtos")
const promo = document.getElementById("sec-promo")


botao.onclick = (event) => {
    event.preventDefault() 
    fetch(`http://localhost:3000/prodN/${campoBusca.value}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
        const compResposta = document.getElementsByID("resp")
        if(dados.length == 0){
            compResposta.innerHTML = "erro  "
        }else{
            let conteudo = '';
            for (let i = 0; i < dados.lenght; i++) {
                
               conteudo = `<div class="thumbnail col-lg-3 col-xs-8 col-md-4 col-sm-6">
                <figure>
                    <img src="./img/tv1.png" class ="img-responsive" alt="tv1" style="width:95%">
                    <figcaption>Nome: ${dados[i].nome} - Preço: ${dados[i].preco}'.</figcaption>
                  </figure>
            </div>`
            compResposta.innerHTML = conteudo           
            }   
            
        }
    })
}

prod.onload = (event) => {
    //essa função vai retornar todos os produtos cadastrados no banco quando carregar a página
    event.preventDefault() 
    fetch(`http://localhost:3000/prod`)
    .then((resposta) => resposta.json())
    .then((dados) => {
        const compResposta = document.getElementsByID("prodA") //promoA é a DIV que deverá lançar o resultado do InnerHTML na section dos produtos
        if(dados.length == 0){
            compResposta.innerHTML = "erro  "
        }else{
            let conteudo = '';
            for (let i = 0; i < dados.lenght; i++) {
                
               conteudo = `<div class="thumbnail col-lg-3 col-xs-8 col-md-4 col-sm-6">
                <figure>
                    <img src="./img/tv1.png" class ="img-responsive" alt="tv1" style="width:95%">
                    <figcaption>Nome: ${dados[i].nome} - Preço: ${dados[i].preco}'.</figcaption>
                  </figure>
            </div>`
            compResposta.innerHTML = conteudo           
            }   
        }
    })
}

promo.onload = (event) => {
    //essa função só tem imagens do carrocel. Como no banco não existe imagem ela se encontra local.
    //caso fosse necessário pegar as imagens do banco, o processo seria fazer um laço no class="carousel-indicators" 
    //então poderia ter uma tabela de promoções e cadastrar as promoções que eu quero que passe no carrocel. 
    // alem disso, também devemos incluir no laço a div class="carousel-inner". 
    event.preventDefault() 
    fetch(`http://localhost:3000/prod`)
    .then((resposta) => resposta.json())
    .then((dados) => {
        const compResposta = document.getElementsByID("resp")
        if(dados.length == 0){
            compResposta.innerHTML = "erro  "
        }else{
            let conteudo = '';
               conteudo = `<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
               <!-- Indicators -->
               <ol class="carousel-indicators">
                 <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                 <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                 <li data-target="#carousel-example-generic" data-slide-to="2"></li>
               </ol>
             
               <!-- Wrapper for slides -->
               <div class="carousel-inner" role="listbox">
                 <div class="item active">
                   <img src="./img/promo1.jpg" alt="Promoção">
                   <div class="carousel-caption">
           <h3>Não perca essa oportunidade</h3>
           <p>Venha conhecer</p>
                   </div>
                 </div>`
            compResposta.innerHTML = conteudo           
               
        }
    })
}



