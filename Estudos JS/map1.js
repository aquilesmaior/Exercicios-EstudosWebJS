  /*    .MAP
         o método map serve para fazer uma transformação array.
         Ou seja, ele invoca a função callback passada por argumento 
         para cada elemento do Array e devolve um novo Array como resultado.
         
        Ele não altera o array, e sim cria um novo

        arr = ['1','4','9'];
        arr.map(callback[, thisArg])

  */


  // por exemplo podemos dobrar os elementos de um array e 
  // mantar o mesmo tamanho do array

  const numsOriginal = [1, 2, 3, 4, 5, 6]

  let novoArray = numsOriginal.map(function(e) { 
      return e * 2
  });

  console.log(numsOriginal);
  console.log(novoArray); // veja que ele dobrou de acordo com o return


  /* [ DESAFIO ] .map
      Some 10 pra cada elemento do array,
      triplique esse valor
      converta para dinheiro.   
  */

  const adicao = e => e + 10 // somando +10
  const triplicar = e => e * 3 
  const converterMoeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` 

  resultado = numsOriginal.map(adicao).map(triplicar).map(converterMoeda);
  console.log(resultado);
