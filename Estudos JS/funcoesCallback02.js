/*
    CALLBACK
    nessa demonstração criaremos um array chamado notas com várias notas
    em seguida criaremos um novo array onde pegaremos todas as notas
    menores do que 7.

*/

const notas = [7.7, 6.5, 5.2, 8.9, 7.2, 3.3, 9.5] // array de notas

// SEM CALLBACK - só para demonstrar como seria sem o uso do callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i]) // .push para adicionar elemento no array
    }   
}
console.log("SEM CALLBACK: ", notasBaixas1) // vai mostrar o resultado das notas menores que 7 no console



// USANDO O CALLBACK - .filter
const notasBaixas2 = notas.filter(function(nota){// só lembrando que essa função .filter ela não altera o array original, apenas filtra
    return nota < 7    
})

console.log("COM CALLBACK: ", notasBaixas2)


/* notas baixas3 recebe notas.filter 
  (aqui passamos que nota i nota menor que 7)
*/
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log("CALLBACK + ARROW: ",notasBaixas3) 