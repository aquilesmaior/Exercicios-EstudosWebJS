/*

JavaScript split()
Nesta documentação de JavaScript veremos como utilizar o método split(), que permite dividir/separar strings.

Apresentaremos aqui como utilizar o método split().

JavaScript split(): Na prática

*/

// Array retornado: ["João", "da", "Silva", "Oliveira"]
stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split(" ");
  
// Array retornado: ["J", "o", "ã", "o", " ", "d", "a", " ", "S", "i",  
// "l", "v", "a", " ", "O", "l" , "i", "v", "e", "i", "r", "a"]
stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split("");
  
// Array retornado: ["João", "da", "Silva"]
stringExemplo = "João da Silva Oliveira";
resultado = stringExemplo.split(" ", 3);
  
// Array retornado: ["usuario", "gmail.com"]
stringExemplo = "usuario@gmail.com";
resultado = stringExemplo.split("@");
  
// Array retornado: ["Os ", " números ", " precisam ser ", " removidos"]
stringExemplo = " Os 8000 números 345 precisam ser 1 removidos";
resultado = stringExemplo.split(/\d+/); 
  
// Array retornado: ["exemplo", "com", "dados", "no", "formato", "csv"]
conteudoCSV = "exemplo ; com ; dados ; no ; formato ; csv";
resultado = conteudoCSV.split(/\s*;\s*/);

/*

Como funciona o split()?
O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caractere separador é removido das substrings resultantes no array. Considerando o seguinte código:


var stringExemplo = "João da Silva Oliveira";
var resultado = stringExemplo.split(" ");
O valor atribuído à variável resultado será o array ["João", "da", "Silva", "Oliveira"], conforme a Figura 1.


*/