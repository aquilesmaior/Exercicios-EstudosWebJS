/*
    FILTER SERVE PARA FILTRAR UM ARRAY

    filtrar um array para ter determinados resultdos
    exemplo, caso queira filtrar um array para ter a nota
    de todos alunos que tiraram abaixou ou acima de 7
    *filtrar os clientes que fazem aniversário esse mês
    *filtrar os produtos de determinada cor
    ...
*/


const produtos = [
    { nome: 'Notabook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'copo de aço', preco: 15.00, fragil: false },
    { nome: 'copo de vidro', preco: 12.31, fragil: true },
    { nome: 'copo de plástico', preco: 10.00, fragil: false }
]




// PRODUTOS FRAGEIS
console.log(produtos.filter(function(produto) {
    return produto.fragil == true;
}))


// PRODUTOS MAIS RESISTENTES
console.log(produtos.filter(function(produto) {
    return produto.fragil == false;
}))

// PRODUTOS ACIMA DE 1000 REAIS
console.log(produtos.filter(function(produto){
   return produto.preco > 1000.00
}))


console.log('\n--------------------DESAFIO-------------------')


// DESAFIO

// criar função pra dizer se o produto é caro
const produtoCaro = produto => produto.preco >= 1000.00

// criar funcao pra dizer se produto é fragil
const produtoFragil = produto => produto.fragil // ele já é bool (Verdadeiro ou falso)



// chamar o filter duas vezes encadeado
const resultado = produtos.filter(produtoCaro).filter(produtoFragil)
console.log(resultado);


