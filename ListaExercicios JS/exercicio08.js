/*
     ​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
     ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota 
     no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 
     
     Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que 
     ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de
     vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo.
     (Número do pior jogo). 

     Obs.: O primeiro jogo não conta como novo recorde do melhor.  
     Exemplo:  String: “10 20 20 8 25 3 0 30 1” 
     Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor 
                        pontuação e a pior pontuação aconteceu no sétimo jogo.) 
 
    regDeResultados = [10, 20, 20, 8, 25, 3, 0, 30, 1]
    incluir valor aqui regDeResultados.push[jogoAtual]

    if(percorrer array)


*/
let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ") // vai dividir a stringPontuacoes e colocar dentro de um array
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0] // vai usar esse array começando do [0]] para comparar lá na condição dentro do for
    let menorPontuacao = pontuacoes[0]
    //pensei em usar:
    //let maiorPontuacao = Math.max.apply(null, pontuacoes) // pega o maior valor no array, no caso a maior pontuação
    //let menorPontuacao = Math.min.apply(null, pontuacoes) // pega o menor valor no array, no caso a maior pontuação


    console.log(maiorPontuacao);

    for (let i = 1; i < pontuacoes.length; i++) { // let i foi setado como 1, para começar apartir do indice 1, ou seja anular o primeiro resultado do jogo na hora de percorrer o array
        if(pontuacoes[i] >= maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))


/*


let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"


 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ") // vai dividir a stringPontuacoes e colocar dentro de um array
    let qtdQuebraDeRecords = 0
    let piorJogo = 0
    //let maiorPontuacao = Math.max.apply(null, pontuacoes) // pega o maior valor no array, no caso a maior pontuação
    //let menorPontuacao = Math.min.apply(null, pontuacoes) // pega o menor valor no array, no caso a maior pontuação
    let maiorPontuacao = 0
    let menorPontuacao = 0
    //console.log('maior', maiorPontuacao)
    //console.log('menor', menorPontuacao)
    

    /*
        FOR tem tres partes
        a primeira: declaração da variável ;
        a segunda: a condição que ele vai usar pra ficar repetindo o bloco
        a terceira: o incremento

    */

    /*
   let regPoint = 0
    for(let i = 1; i < pontuacoes.length; i++) {

        console.log(pontuacoes[i])
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
           regPoint++     
        }

    }

    console.log("reg=", regPoint);


    for (let i = 1; i < pontuacoes.length; i++) {  
        // i=1 quer dizer pra começar no indice 1 e não no 0, já que o exerício fala para não contar o primeiro resultado 
        // logo temos a condição: enquanto i < pontuacoes (lembrando que pontuacoes.lengh está nos retornando 10 posicoes ou seja o numero 10) referente array pontuacoes =['30', '40', '20','4',  '51', '25','42', '38', '56','0'] 
        // então enquanto i começando de 1 ; i for menor que 10 ele percorre o bloco e incrementa mais 1
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))


*/




