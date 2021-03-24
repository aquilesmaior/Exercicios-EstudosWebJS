/*  MELHORIAS - ECMA SCRIPT 2015
    
    antes tinhamos object.keys
    ES8: Object.values/Object.entries 
         nos da um array de chave e matriz
*/

const obj = { a: 1, b: 2, c:3 }
console.log(Object.values(obj)) // retorna os objetos "values"
console.log(Object.entries(obj)) // retorna uma matriz "array" de "arrays"


// Melhorias na Notação Literal
const nome = 'Jaque'
const pessoa = {
    nome,  // antes: nome: nome,
    ola() { // antes: ola: function()
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())


// CLASS - internamente uma classe é convertida em função no JS
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}

console.log(new Cachorro().falar()) // new para criar objetos apartir de uma classe

