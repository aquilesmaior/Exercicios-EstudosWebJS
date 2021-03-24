

const alunos = [
    { nome: 'João', nota: 5.3, bolsista: true },
    { nome: 'Antonio', nota: 9.1, bolsista: false },
    { nome: 'Ana', nota: 8, bolsista: false },
    { nome: 'Lu', nota: 10, bolsista: true }
]

// use o map com arrow para mostrar as notas
console.log(alunos.map( a => a.nota ))



const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log('acumulada + nota Atual = ', acumulador, atual)
    return acumulador + atual

}, 0) // aqui voce pode definir um valor inicial para que ele comece acumular

console.log('TOTAL ACUMULADO = ', resultado)

/*

    ESTE EXEMPLO ACIMA SERVERIA PARA ACUMULAR POR EXEMPLO
    UM RESULTADO DE UMA MEGASENA EM QUE NÃO SE TEVE GANHADOR
    E O PRÊMIO FOI ACUMULANDO.

*/