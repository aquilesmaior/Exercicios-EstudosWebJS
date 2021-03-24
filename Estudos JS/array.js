// um array só com clientes
// um array só com produtos
// um array só com booleans

// Criei essa function pra ficar mais prático de listar os arrays
function mostrarArray(){
    // Uma das formas de listar tudo que está nesse array seria essa aqui ó:
    Object.entries(aprovados).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
  })
}


// Opte por trabalhar com Array Literal "notação literal" pois fica mais claro

console.log('------  ARRAY - NÃO LITERAL não recomendado ------');
// forma NÃO recomendada
let aprovados = new Array('Lulu','Giugiu', 'Manu', 'Yago', 'Bruce')
console.log(aprovados)
console.log('\n') //saltar linha


console.log('------  ARRAY - NOTAÇÃO LITERAL (recomendado) ------');
// ARRAY LITERAL - RECOMENDADO (notação literal)
aprovados = ['Lulu','Giugiu', 'Manu', 'Yago', 'Bruce']
console.log(aprovados[0]) // veja que assim podemos acessar pelos indices
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados[5]) // como esse não existe, ele não da erro, mas retorna undefined
console.log('\n') //saltar linha


console.log('--------- ALTERANDO O VALOR DE UM ARRAY -------')
//ALTERANDO VALOR DE UM ELEMENTO DO ARRAY
aprovados[4] = 'Bruce Dickson'
aprovados[5] = 'Dio'

// Se eu pedir pra mostrar de novo, veja que foi alterado
console.log(aprovados[0]) 
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados[5])
// poderia chamar a função mostrarArray(aprovados) , mas vou deixar esse de exmeplo 
console.log('\n') //saltar linha


console.log('------------ .push("add novo elemento") -----------------');
// COMO ADICIONAR UM ELEMENTO NO FINAL DO ARRAY
aprovados.push('Bruno')

// Se eu pedir pra mostrar de novo, veja que foi alterado
mostrarArray(aprovados) // fn pra listar array
console.log('\n') //saltar linha


console.log('----------- .sort() A-Z (mais ou menos né) ------------------');

// MÉTODO SORT - ORDENAR UM ARRAY (keys and value) 
aprovados.sort() // aqui ele ordena de A-Z
//aprovados.reverse() // usado depois do .sort , ele ordena de Z-A mas usado sozinho ele vai ordenar conforme a ordenação que estiver

// Uma das formas de listar tudo que está nesse array seria essa aqui ó:
Object.entries(aprovados).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
console.log('\n') //saltar linha

/*
var pontuacao = [1, 10, 2, 21]; 
pontuacao.sort(); // [1, 10, 2, 21] ele vai seguri o padrão unicode,
em vez de ordenar 1, 2, 10, 21. vai ficar 1, 10, 2, 21 
pois o 10 vem de 2 no padrão unicode.

confira o arquivo. ordernarSort.js 

*/


console.log('---------- DELETE ---------------');

// COMO DELETAR ELEMENTO NO ARRAY
delete aprovados[2] // vai apagar o 2: DIO 

mostrarArray(aprovados) // fn pra listar array

console.log('\n') //saltar linha




console.log('---------- SPLICE (add e remover ao mesmo tempo) ---------------');
  /* 
    O método splice nos permite  excluir e adicionar elementos ao mesmo 
    tempo apartir de um indice. 
    Excluir: splice(i, x) 
    splice(indice, quantidade de elementos que vc quer excluir apartir destes indice)
    Excluir e Add: splice(i, x, 'value', 'value') 
  */
aprovados.splice(0, 2, 'Bruce Dickinson', 'R Dio')

mostrarArray(aprovados) // fn pra listar array



