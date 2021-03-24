    /* 
    Só uma anotação boba pra lembrar que
    Arrows é simplesmente criar uma função 
    dentro de uma variável usando o "=>".
    variavel = () =>
   */

   //ARROW FUNCTION - veja que na arrow function, não escrevemos 'function' e sim o sinal de => "igual setinha"   
   const mostrarSoma = (a,b) => {
        //return a + b; 
        return console.log("Soma = ", a + b); 
   }
   mostrarSoma(28,80);

   // arrow function com retorno implícito
   const subtracao = (a,b) => a - b; // aqui não foi usado {} e foi feito tudo na mesma linha, mas poderia usar e identar normal.
     console.log(subtracao(6, 2));
   



     
     
   //REGULAR FUNCTION - Em uma função regular sem Arrows seria assim:
   function mostrarSoma2(a, b){
      console.log(a+b);
   }
   mostrarSoma2(3,80);


   // usando Função anônima dentro de uma variável
   const mostrarMult = function(a,b){
      console.log(a*b);
   }
   mostrarMult(9*7); 
   

