let frutas = [] //Declaração do array de frutas
let precos = [] //Declaração do array de preços

function cadastro(){ //Declaração da função cadastro
    let fruta = document.getElementById('fruta').value //Obtenho o valor de input "fruta"
    let preco = Number(document.getElementById('preco').value) //Obtenho o valor do input "preço"
    
    if(fruta != "" && preco != 0){ 
        if(frutas.indexOf(fruta) == -1){

            frutas.push(fruta) //Inserindo o valor de fruta no array frutas
            precos.push(preco) //inserindo o valor de preco no array precos
                let mensagem = "Lista de frutas" //Criando uma variavel String para usar como saída
                    for(let produto of frutas){ //Para cada produto contido no array frutas, precos...
                let pos = frutas.indexOf(produto) //Criando a variavel para pegar o indice do produto
                mensagem += "<br>"+produto+'| Preço: '+precos[pos] //Concatenando a mensagem de saida
        }
        document.getElementById("lista").innerHTML = mensagem //Atualizando o paragrafo
    }
    else{
        alert('Fruta já cadastrada!')
    }
    }else{
        alert('Preencha corretamente os dois campos!')
    
   }
}

