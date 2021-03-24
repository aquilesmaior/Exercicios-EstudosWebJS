/*
    Implementando um filter
    ou seja fazendo um filter na mão porém uma versão simplicada

*/


Array.prototype.filter2 = function(callback){
    const novoArray = [] // array vazio
    
    // percorre o array original pelo indice 0 até o tamanho do array "this.length"
    for (let i = 0; i < this.length; i++) { 
       // vai adicionar  
       if(callback(this[i], i, this)){
           novoArray.push(this[i])
       }
    }
    return novoArray // retorna o novo array
}



// testando

const produtos = [
    { nome: 'Notabook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'copo de aço', preco: 15.00, fragil: false },
    { nome: 'copo de vidro', preco: 12.31, fragil: true },
    { nome: 'copo de plástico', preco: 10.00, fragil: false }
]


// DESAFIO

// criar função pra dizer se o produto é caro
const produtoCaro = produto => produto.preco >= 1000.00

// criar funcao pra dizer se produto é fragil
const produtoFragil = produto => produto.fragil // ele já é bool (Verdadeiro ou falso)



// chamar o filter duas vezes encadeado
const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil)
console.log(resultado);
