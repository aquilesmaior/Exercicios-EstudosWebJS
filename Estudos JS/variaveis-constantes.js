/*  Estudos sobre Variáveis e Constnates no JS  

    TIPOS:
    
    var

    let

    const

   //////////////////////////////////////

    Evitar usar variável do tipo VAR
    
*/

// EXEMPLOS DE VARIÁVEIS

var a = 3;
let b = 48;

var a = 4440; // já o VAR aceita ser identificado novamente para receber outro valor
//let b = 222;  veja que não é preciso declarar o identificador LET novamente
b = 222; // correto seria assim

console.log(a,b);

/* tente sempre usar LET em vez de VAR*/


// EXEMPLO DE CONSTANTES

const c = 40;
//  c = 32342; // <-- isso não funcionará simplesmente por ser uma constante, não é possível atribuir um novo valor, bem óbvio kkk

console.log(c);

/*  
    OBSERVAÇÃO IMPORTANTE
    tudo que você não precisar mudar dentro do código
    opte por usar uma constante


    EVITAR
    evite usar nome de váriaveis com nomes confusos ou siglas confusas
    
    

    ANOTAÇÕES

    JAVASCRIPT é uma linguagem de TIPAGEM FRACA 
    
    *MAS O QUE SERIA ISSO?
    é uma linguagem que as variáveis praticamente não são declaradas
    por exemplo uma mesma variável pode ser do tipo inteira ou uma string
    o mesmo ocorre no php.
    
    exemplo:
    a = "asdfasdf";
    a = 12312;
    notou como não teve definição, em outras linguagens deveriamos
    tipar int a = 13423; ou  string a = "asdfasd"

    APESAR de não serem tipadas, os tipos existem para serem usados



*/