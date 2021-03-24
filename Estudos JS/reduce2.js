const alunos = [
    { nome: 'João', nota: 5.3, bolsista: true },
    { nome: 'Antonio', nota: 9.1, bolsista: false },
    { nome: 'Ana', nota: 8, bolsista: false },
    { nome: 'Lu', nota: 10, bolsista: true }
]

// DESAFIO

// Todos são Bolsistas ?
const verificaBolsa = (resultado, bolsista) => resultado && bolsista
let resultBolsa = alunos.map(a => a.bolsista).reduce(verificaBolsa)

if(resultBolsa == false){ 
    console.log('Não são todos bolsistas')
}

 
// Algum aluno é Bolsista ?
const verificaBolsa2 = (resultado2, bolsista) => resultado2 || bolsista
let resultBolsa2 = alunos.map(a => a.bolsista).reduce(verificaBolsa2)

if(resultBolsa2 == true){ 
    console.log('Sim algum é bolsista')
}