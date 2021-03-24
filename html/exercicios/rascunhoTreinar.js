


// OP TERNARIO

const teste = 5
const teste2 = teste <= 10 ? 'ok' : 'NNNNNN'
console.log(teste <= 10 ? 'ok' : 'NNNNNN')


// arrow
const somar = (a, b) => { return console.log(a+b) }

somar(1,9)

const outro = (asdf) => asdf < 50 ? 'é menor' : 'não é'

console.log(outro(40))



// callback

const nomes = ['Jaque', 'Lulu', 'Melizee', 'Maxmus'];

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

nomes.forEach(imprimir)

nomes.forEach(function(nome) {
    console.log(nome)
})







// arrow

const sub = (n1, n2, n3) => n1 + n2 * n3 ;
console.log(sub(5, 5, 5))



// callback

const funcionarios = ['asfd', 'asdfqwer', 'vzxcv', 'uuuu']

function lista(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}

funcionarios.forEach(lista) // vai listar indice. nome

funcionarios.forEach(function(nome) {
    console.log(nome)
})


// Arrow
const somarX = (a,b) => a + b 

console.log(somarX(2,5))


//callback

const marcas = ['aoc', 'apple', 'samsung', 'dell']

function imprimir(nome, indice) {
    console.log(`function normal ${indice+1}. ${nome}`)
}

const imprimir2 = (nome, indice) => { 
    return console.log(`${indice+1}. ${nome}`)
}

marcas.forEach(imprimir2)

marcas.forEach(function(nome) {
    console.log(nome)
})

marcas.forEach((nome) => console.log('arrow', nome))







