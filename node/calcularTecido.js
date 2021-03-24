// DESAFIO 1 - QUANTAS MÁSCARAS 20 x 40 DE TECIDO CONSIGO FAZER 1 x 1.4metros de tecido ?

// TAMANHO TECIDO
let largTecido = 1 * 100; //mt  poderia ser direto também 100 cm
let altTecido = 1.40 * 100; //mt 140 cm

// TAMANHO PEÇA
let largPeca = 20; //cm
let altPeca = 40; //cm 


// CALCULAR
const calcular = function(a, b, c, d) {
    return ((largTecido * altTecido) / (largPeca * altPeca));
}

const res1 = (largTecido * altTecido);
const res2 = (largPeca * altPeca);

console.log('faz = ', (res1 / res2).toFixed(2), ' peças')
console.log('faz = ', calcular(largTecido, altTecido, largPeca, altPeca).toFixed(2), ' peças')



// DESAFIO 2 - CRIE UMA REGRA DE 3 simples
/*
    a ------- c
    b ------- x
   (b * c) / a = x

    Para uma certa quantidade de café de 50ml,
    usamos 3 gotas de adocante.
    Em uma garrafa de 600ml qtas gotas de adocante seram
    necessárias para adocar o café.
*/

const regraDe3 = function(a, b, c) {
        return ( b * c ) / a
}

let a = 50 // café em ml
let b = 600 // garrafa suporta 600 ml
let c = 3 // gotas de adoçante

console.log('Regra3  Café = ', regraDe3(a, b, c), 'gotas')
//////////////////////////////////////////////////////


let a1 = (20*40) // Tamanho da peça
let b1 = 100 // tamanho Tecido
let c1 = 140 // Largura Tecido

console.log('Regra3 Tecido = ', regraDe3(a1, b1, c1))
/////////////////////////////////////////////////////


// DESAFIO 3 - PRECISO FAZER 938 PEÇAS. QUANTO DE TECIDO VOU PRECISAR ?
let a2 = 14000 // Tamanho da peça
let b2 = 938 // tamanho Tecido
let c2 = 800 // Largura Tecido

console.log('Regra3 Tecido2 = ', regraDe3(a2, b2, c2))
/////////////////////////////////////////////////////



