/*
    FORMAS DIFERENTES DE DECLARARAR FUNCOES
    aula de revisão       

    Curiosidade a function Declarations
    mesmo que tu chame a funcao antes dela ser declarada
    o js vai executa-la sem erros, pois o browser ao carregar a 
    página, ele le todas funcoes primeiros e depois executa o código
    exceto no caso da function expression e na named expression
    
*/

console.log(soma('soma=',3, 4))


// function declaration - tradicional muito usada
function soma(x, y) {
    return x + y 
}
//console.log(soma('soma=',3, 4)) poderia chamar aqui tbém


// function expression - um pouco usada. Anonima porém atribuido uma variavel ou constante
const sub = function (x, y){
    return x - y
}
console.log('sub=', sub(3, 4))



// named function expression - essa já é não é anonima, porém atribuida a uma variavel
const mult = function mult(x, y){ // pouquissima usada, usada mais para questões de debug
    return x * y
}
console.log('mult=', mult(3, 4))

