/* Exemplo abaixo é bem simples, mas é só pra 
   reforçar mesmo o conceito de ATRIBUIÇÃO.

   usando o operador com um sinal de igual junto, ele atribui
   o valor aquela variável
   
*/

let a = 7
let b = 3
let c = 10

b += a // aqui ele diz que a variavel b que antes era b=3 agora será somado a ela o valor do próprio b que é 3 + a que é 7. Ou seja b=b+a  b=3+7. Resultado b=10
console.log("b=",b)

/* 
    o conceito é o mesmo para os demais operadores.
    += 
    -= 
    *= 
    /= 
    %=
*/

c %= a // vai mostrar o resto
console.log("c=",c)