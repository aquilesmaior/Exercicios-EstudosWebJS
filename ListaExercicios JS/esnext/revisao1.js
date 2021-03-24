// var, let e const
// var - antigamente tinhamnos o var que tinha escopo de funcao e global
// let - escopo de bloco
{
  var a = 2
  let b = 3
  console.log(b)
}
console.log(a)
// console.log(b) // se tentar acessar b aqui fora do bloco vai dar erro


// TEMPLATE STRING - usando ``crase, voce consegue usar texto e variavel
const produto = 'iPad'
console.log(`o ${produto} é caro!`)


// DESTRUCTURING
const [l, e, ...tras] = "Cachorro" // destructuring + operador rest ...
console.log(l, e, tras)
console.log(e, l, tras) // inverter tambem
console.log(e, tras, l) // inverter tambem

//const [x, y] = [1, 2, 3] // retorna 1,2
const [x, , y] = [1, 2, 3] // caso queira ignorar algum elemento, deixe o espaço vazio depois da virgula
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)




