// Percorrer array com forEach
// lembrando que o foreach recebe 3 parametros (nome, indice, array)
const cantores = ['Bruce', 'James', 'Dio', 'Andy', 'Robert']

// com apenas dois parametros
cantores.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//mostrando com os 3 parametros
cantores.forEach(function(nome, indice, array) {
    console.log(indice, ') array= ', array)
})


// forEach com arrow function
cantores.forEach((nome, indice) => console.log(indice,')', nome))
cantores.forEach(nome => console.log(nome)) // se quiser mostrar só os nomes

/*
este exemplo abaixo funcionaria também, já que cantores é um object
Object.entries(aprovados).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
*/

