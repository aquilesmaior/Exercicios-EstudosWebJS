/*

*/

const arrPilotos = ['Hammilton', 'Lauda', 'Vettel', 'Alonso', 'Massa'];
arrPilotos.pop(); // vai remover o último elemento do array, no caso o Massa
console.log(arrPilotos)

arrPilotos.push('Verstappen') // vai add ao final do array
console.log(arrPilotos)

arrPilotos.shift(); // remove o primeiro array da lista
console.log(arrPilotos)

arrPilotos.unshift('Senna'); // add na primeira posição do array
console.log(arrPilotos)


// SPLICE - sPlice [pode adicionar e remover elementos]
// adicionar
arrPilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(arrPilotos)

//remover
arrPilotos.splice(3,1) // massa saiu
console.log(arrPilotos)



// SLICE - sLice [SERVE PARA PEGAR PARTE, PEDAÇO DO ARRAY]
/*  
    pega o novo array apartir do indice informado, pega dele pra frente
    [ 'Senna', 'Lauda', 'Bottas', 'Vettel', 'Alonso', 'Verstappen' ]
    se informarmos indice 2 , ele vai retornar  [ 'Bottas', 'Vettel', 'Alonso', 'Verstappen' ]
*/
const algunsPilotos1 = arrPilotos.slice(2) 
console.log(algunsPilotos1)

const algunsPilotos2 = arrPilotos.slice(1, 4) // ele inicia no indice 1 e para um indice antes do 4
console.log(algunsPilotos2)