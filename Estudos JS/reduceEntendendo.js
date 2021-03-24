// IMPLEMENTE SEU PRÓPRIO REDUCE COM VALOR INICIAL 0
Array.prototype.reduce2 = function(callback){
    let acumulador = this[0] // recebe this[indice zero]
    for (let i = 1; i < this.length; i++ ) { // percorrer o array apartir do indice 1 e não do zero
        acumulador = callback(acumulador, this[i], i, this)// agora vamos atribuir o resultado da callback passando o acumulador atual ,"virgula"  o valor atual que estou percorrendo no array
        }
        return acumulador
    }

    //testando nosso proprio reduce simplicado
    const soma  = ( total, valor ) => total + valor
    const nums  = [1, 2, 3, 4, 5, 6]
    console.log('resultado = ', nums.reduce2(soma))



// IMPLEMENTE SEU PRÓPRIO REDUCE QUE POSSA RECEBER VALOR INICIAL
Array.prototype.reduce3 = function(callback, valorInicial){
    const inidiceInicial = valorInicial ? 0 : 1  // se valor inicial tiver setado significa que o indice inicial será 0 se não tiver ele será 1
    let acumulador = valorInicial || this[0] 

    for (let i = inidiceInicial; i < this.length; i++ ) { // percorrer o array apartir do indiceInicial setado
        acumulador = callback(acumulador, this[i], i, this)// agora vamos atribuir o resultado da callback passando o acumulador atual ,"virgula"  o valor atual que estou percorrendo no array
        }
        return acumulador
    }

    //testando nosso proprio reduce simplicado
    const soma2  = ( total, valor ) => total + valor
    const nums2  = [1, 2, 3, 4, 5, 6]
    console.log('resultado2 = ', nums2.reduce3(soma2, 21)) // setando callback, valor inicial


