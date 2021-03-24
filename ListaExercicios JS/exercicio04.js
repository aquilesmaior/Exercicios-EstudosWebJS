/*
04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
    A função deverá imprimir o RESULTADO e o RESTO da divisão destes dois valores
*/

function oRestoDiv(dividendo, divisor) {
    console.log('Resultado:' + Math.floor(dividendo / divisor))
    console.log('O resto: ',  dividendo % divisor)      
}


oRestoDiv(11,4)


// Math.floor() retorna o maior número inteiro menor ou igual a um determinado número.


