/*
JavaScript length
Nesta documentação de JavaScript veremos como utilizar a propriedade length para obter o tamanho de uma String ou de um array.

Apresentaremos aqui como utilizar o método length.

JavaScript length: Na prática

*/

// Valor retornado: 25
stringExemplo = "JavaScript é na DevMedia!"
stringExemplo.length;
  
// Valor retornado: 6
carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
carros.length; 
  
// Valor impresso: “String vazia!”
stringExemplo ="";
  
if (stringExemplo.length == 0) {
         console.log("String vazia!");
}
  
// Valor impresso: “A senha precisa ter pelo menos seis caracteres.”
var senha = "12345";
  
if (senha.length < 6) {
         console.log("A senha precisa ter pelo menos seis caracteres.");
}
  
// Valor impresso: “CPF com tamanho correto!”
cpfExemplo ="123.456.789-12";
  
if (cpfExemplo.length == 14) {
         console.log("CPF com tamanho correto!");
} else {
         console.log("Verificar campo CPF");
}
  
// Valor impresso: “Civic Elantra Focus Jetta Cruze Corolla”
carros = ["Civic", "Elantra", "Focus", "Jetta", "Cruze", "Corolla"];
  
for (var pos = 0; pos < carros.length; pos++) { 
         console.log(carros[pos]);
}


/* 

Como funciona a propriedade length?
A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. 
Caso a string ou o array esteja vazio, é retornado o valor 0. Considerando o seguinte código:

var stringExemplo = "Aprendendo JavaScript na DevMedia!";
var tamanho = stringExemplo.length;
O valor atribuído à variável tamanho será o número 34, conforma a Figura 1.
*/