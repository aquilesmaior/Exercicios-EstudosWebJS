/* 
    EXPLICANDO O CONCEITO DE IMPERATIVO E DECLARATIVO. 
    Qual abordagem é melhor usar ?

    entenda:
*/

 
// OBJETIVO CALCULAR A MÉDIA DOS ALUNOS

const alunos = [
    {  nome: 'João', nota: 8.1 },
    {  nome: 'Ana', nota: 9.1}
]


// IMPERATIVO - não tem aproveito
// se importa mais com o como tem que ser feito
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log('média da turma = ', total1 / alunos.length)



// DECLARATIVO - temos mais reaproveitamento de código
// se importa mais com o que tem que ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual // viu que temos uma arrow function de soma

//const total2 = alunos.map(aluno => aluno.nota).reduce((total, atual) => total + atual)
const total2 = alunos.map(getNota).reduce(soma)
console.log('media da turma = ', total2 / alunos.length)
