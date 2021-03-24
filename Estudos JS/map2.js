/*
    COMO IMPLEMENTAR O MAP
    ou seja, crie uma função callback que faça exatamente o que a função
    map faz. Em outras palavras, crie o map não mão

    só lembrando que a função map mapeia os elementos de um array
    para um novo array com o resultado de um função aplicada a cada 
    elemento.
*/

// recriando o que o map já faz
Array.prototype.map2 = function(callback){
    const novoArray = [] // array vazio
    
    // percorre o array original pelo indice 0 até o tamanho do array "this.length"
    for (let i = 0; i < this.length; i++) { 
       // vai adicionar  
       novoArray.push(callback(this[i], i, this))
    }
    return novoArray // retorna o novo array
}


// EXEMPLO:

const carrinhoCompras = [
    '{ "produto" : "Borracha", "preco": 3.45 }',
    '{ "produto" : "Caderno", "preco": 10.80 }',
    '{ "produto" : "Lapis", "preco": 5.70 }',
    '{ "produto" : "Caneta", "preco": 1.80}'
]
console.log(carrinhoCompras);

// Pegar o array acima e retornar apenas os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinhoCompras.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
/*
tete = teste
console.log(teste)
*/
