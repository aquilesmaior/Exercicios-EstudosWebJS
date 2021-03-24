// PROMISES - é uma promessa 


/*
    vc usa quando quer um processamento assincrono
             a promessa foi cumprida 
                      ou
             a promessa foi rejeitada

    Forma de acessar é via callback

    */

// exemplo usando o setTimeOut
 
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve só aceita um único parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // tratando erro
    
    
    /*  
    EXPLICANDO FUNÇÃO A CIMA 
    quando a promessa for atendida ele faz o resolve

    recebe dois parametros e retorna uma promessa
    essa promessa com o timeout da um delay

    quando a promissa for chamada ela executa a funçaõ .then()

    */