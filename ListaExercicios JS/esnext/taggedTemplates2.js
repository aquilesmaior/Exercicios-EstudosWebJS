// VEJAMOS OUTRA FORMA.

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        
        // se não for um número retorne o próprio valor, se for então aplica a máscara de moeda
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor) // joga no array
    })
    return resultado.join('') // vai pegar todos elementos desse array resultado e gerar a string no final
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)




/*  Ele alternou igual do exericio anterior.

    [ 1x de   , ou 3x de, . ]
    [ R$ 29.99, R$11.00 ,   ]
    
*/