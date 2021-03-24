/*
    Uma das vantagens da programação é a automatização de tarefas que não 
    gostamos de realizar. Dito isto, elabore uma função cujo objetivo é 
    resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
    parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 
    os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser 
    passado um vetor que tem 2 valores um para cada possível resultado, 
    mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, 
    ao invés do vetor, um string com a frase: “Delta é negativo”.


    DELTA = ax2 + bx + c = 0   DELTA
    x1 = -b + DELTA(ACHAR RAIZ DE DELTA) / 2 * a
    x2 = -b - DELTA(ACHAR RAIZ DE DELTA) / 2 * a
    verificar se resultao[x1, x2] são positivo ou negativos

    Usar método push() adiciona um ou mais elementos ao final 
    de um array e retorna o novo comprimento desse array.

*/

function bhaskara (ax2, bx, c) {
    let result = []
    let delta = (bx ** 2) - (4 * ax2 * c) // delta = b² - 4 *a * c
    
    if (delta < 0) {
        return 'o Delta é trevoso'
    }

    // o Math.sqrt()função retorna a raiz quadrada de um número
    let x1 =  (-bx + Math.sqrt(delta)) / 2 * ax2   //x1 = -b + DELTA(ACHAR RAIZ DE DELTA) / 2 * a 
    let x2 =  (-bx - Math.sqrt(delta)) / 2 * ax2   //x1 = -b + DELTA(ACHAR RAIZ DE DELTA) / 2 * a
    
    //Usar método push() adiciona um ou mais elementos ao final 
    //de um array e retorna o novo comprimento desse array.
    result.push(x1)
    result.push(x2)
    return result
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))

/*
    A fórmula de Bhaskara é um método resolutivo para equações do segundo grau 
    utilizado para encontrar raízes a partir dos coeficientes da equação.

    ax² + bx + c = 0

    delta = (b²) - (4 * a *c)
*/

/*
RASCUNHO DE TENTATIVAS ANTERIORES

let ax2 = 3
let bx = 5
let c = 12

let delta = (bx ** 2) + (4 * ax2 * c)


if (delta < 0) {
    console.log('delta é negativo')
}

let x1 =
console.log( 'baskarateste = ', delta  )

// A Math.sqrt()função retorna a raiz quadrada de um número, ou seja,

*/