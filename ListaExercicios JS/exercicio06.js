/*
06)​ Elabore duas funções que recebem três parâmetros: Capital inicial, 
Taxa de juros e Tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira
 sob o regime de juros simples e a segunda retornará 
o valor da aplicação sob o regime de juros compostos.
*/

// No sistema de juros simples, o percentual é aplicado apenas sobre o valor inicial. 
// Geralmente, o juro simples é usado em situações de curto prazo.

function montanteJurosSimples(capInicial, taxJuros, tmpAplicacao){
    console.log('Montante Simples: ', (capInicial * taxJuros * tmpAplicacao) + capInicial)
}
montanteJurosSimples(1200, 0.02, 10) // ou 100, 10/100, 2



function montanteComposto(capital, taxJuros, tmpAplicacao){ // formula M = C (1 + i)t
    console.log('Montante Composto: ', capital * (1 + taxJuros) ** tmpAplicacao )
}
montanteComposto(100, 10/100, 2)


/*
    JUROS COMPOSTO
    Os juros compostos são recorrentes nas relações comerciais, 
    nas compras parceladas a longo prazo, nos investimentos, nos 
    empréstimos e até mesmo no simples atraso do pagamento de contas. 
    O juros pode ser um aliado ou um vilão. É importante dominar os 
    fatores que influenciam o seu cálculo, que são o capital, a taxa 
    de juros, o tempo e o montante.

    Ao comparar o juros composto com o juros simples, precisamos 
    entender que o primeiro é calculado sempre sobre o valor do exercício 
    anterior, já o segundo é calculado sempre em cima do valor inicial. 
    O juros composto terá maior crescimento com o passar do tempo, 
    em comparação com o juros simples.
    
    formula 
    M = C (1 + i)t
*/



/* **************************************************
    RESOLUÇÃO DO PROFESSOR SERIA ASSIM

    function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
    }

    function jurosCompostos (capitalInicial, taxa, tempo) {
        return capitalInicial * (1 + taxa) ** tempo
    }

    console.log(jurosSimples(100, 10/100, 2));
    console.log(jurosCompostos(100, 10/100, 2));





*/