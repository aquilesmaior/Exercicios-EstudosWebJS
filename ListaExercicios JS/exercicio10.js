/*
    10) ​Crie uma função que verifica se um número inteiro passado 
        como parêmetro é divisível por 3 e retorne true ou false. 
*/



function verificaNumero(numero){
    if(numero % 3 == 0) {
        return console.log(numero, true);
    } else {
        return console.log(numero, false);
    }
}



// Aqui já fiz um loop pra rodar 10 testes gerando númeors aleatórios de 0 à 20
for(i=0; i < 10; i++) { verificaNumero(Math.floor(Math.random(20) * 20 )) }


// verificaNumero(3); // pode ser assim também