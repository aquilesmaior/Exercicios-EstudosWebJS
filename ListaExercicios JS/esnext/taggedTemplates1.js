// TAGGED - não é muito usado, mas vai que né... kkk

// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)


/*  veja como o tagged concatena 

    [ '', ' está ', '.' ]
    [ 'Gui', 'Aprovado' ]
    Outra string

// ficaria assim:
    [ 0, 2, 4 ]
    [ 1, 3,  ]
    Outra string
*/



const aluno2 = '01'
const situacao2 = '03'
const situacao5 = '05'
console.log(tag `00${aluno2}02${situacao2}04${situacao5}`)
