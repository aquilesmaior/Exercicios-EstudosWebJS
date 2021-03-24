// MÉTODO SORT() - conceito exemplos

// crie um array pontuacaoAluno e ordene de forma crescente (a-z)
var pontuacaoAluno = [5, 3, 1, 4, 2, 39, 55, 13, 35, 08, 45, 98, 100];

console.log('Array original:', pontuacaoAluno); 
// resultado = [5, 3, 1, 4, 2, 39, 55, 13, 35, 08, 45, 98, 100]

console.log('Array Sort Unicode:', pontuacaoAluno.sort()); 
// resultado = [1, 100, 13, 2, 3, 35, 39, 4, 45, 5, 55, 8, 98 ]


pontuacaoAluno.sort(function(a, b) { return a - b; });
console.log('Array Order Crescente:', pontuacaoAluno);
// resultado = [1, 2, 3, 4, 5, 8, 13, 35, 39, 45, 55, 98, 100]





/* EXPLICANDO

o método .sort() ordena em ordem crescente através do caracteres da tabela Unicode quando convertidos para string. 
Então nesse caso, "10" vem antes do "2" porque "1", que é o primeiro caractere de "10", vem antes do "2".

De acordo com a implementação da tabela Unicode, é possível perceber, pelo menos no nosso subset,
 que a ordem é: alguns símbolos, números, letras maiúsculas, letras minúsculas, mais alguns outros símbolos. O que quer dizer que deverão também obedecer a essa ordem, ou seja, "a" antes do "b", "ab" depois do "a" e antes de "b", "a0" entre "a" e "ab", "Ab" antes de "a", e por aí vai.

"mas como eu ordeno números pelo valor"?
Mas voltando ao nosso problema inicial, o objetivo era ordenar os números 
pelo seu valor, não pelo ~código Unicode, certo?

Bom, pra isso o JavaScript aceita um parâmetro opcional no método sort: 
uma função que determina como seriam as regras da ordenação. Essa função 
recebe dois argumentos, por convenção chamados de a e b, que representam 
dois itens do array que estão sendo comparados.

A vantagem disso é que, na função, você tem controle de qual critério da 
ordenação utilizar, de acordo com algumas regras.

Funciona assim: são comparados a e b, e caso:

a comparação seja menor que zero, a é posicionado antes de b

a comparação seja maior que zero, a é posicionado depois de b

a comparação seja igual a zero, a e b permancem com as posições inalteradas

"Bom, mas como comparar? Não entendi como essas regras se aplicam"

explicação curta (pois deadline chegando)
O que você pode fazer é diminuir os dois valores entre si, e o resultado 
vai decidir se a ou b avança, recua, ou ambos permanecem nas posições atuais.

        var arr = [5, 3, 1, 4, 2];

        console.log('Array original:', arr);

        arr.sort(function(a, b) {
            return a - b;
        });

        console.log('Array ordenado:', arr);

O código acima define um array, o ordena, e o mostra modificado. A parte-chave desse código é o a - b que faz o array ser ordenado de forma crescente. O contrário, b - a o ordena de forma decrescente.

A mesma lógica se aplica para ordenação decrescente, b - a, só que agora com os valores trocados de lugar faz com que a ordenação seja ao contrário da anterior :). Se você ficou confuso ou quer ver isso passo-a-passo, você pode visualizar os valores de a e b mudando:

        arr.sort(function(a, b) {
            console.log(a, b, a - b)
            return a - b;
        });


*/


/*

Indo um pouco além
Já que a e b são, de fato, elementos do array, é possível acessá-los e
 expandir um pouco as possiblidades do uso do método sort.

Digamos que você tenha um array de objetos com o nome de um álbum e o 
ano de lançamento em cada um:

*/

var albunsBandas = [
    {
        banda: 'Iron Maiden',
        album: 'Brave New World',
        anoLancamento: 2000
    },
    {
        banda: 'Led Zeppelin',
        album: 'sei lá',
        anoLancamento: 1985
    },
    {
        banda: 'Barão Red',
        album: 'Maior abandonado',
        anoLancamento: 1987
    },
    {
        banda: 'Foreigner',
        album: 'algum nome',
        anoLancamento: 1994
    }
];

/*
    Pra ordenar esses objetos de acordo com o ano de lançamento, você pode comparar a propriedade 
    anoLancamento de cada objeto, sem ter que manipular mais nada :)
*/
albunsBandas.sort(function(a, b) {
    return a.anoLancamento - b.anoLancamento;
});

console.log(albunsBandas);
//pronto ordenados em ordem crescente pelo anoo