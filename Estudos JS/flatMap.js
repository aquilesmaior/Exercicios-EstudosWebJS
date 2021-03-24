/*
    FLATMAP não é nativo do javascript. Mas o criaremos , pois pode ser
    muito útil.

    ideia é de vc pegar uma matriz e achatar ela num array

*/




/*
    Vamos criar uma constante chamada escola que é um array. Teremos
    várias turmas com outro array de objetos contendo alunos nome e nota.
*/
const escola = [{
    nome: 'Turma Heavy Metal',
    alunos: [{
        nome: 'Bruce',
        nota: 10
    }, {
        nome: 'Dio',
        nota: 10
    }, {
        nome: 'James',
        nota: 9.8
    }]
}, {
    nome: 'Turma Hard Rock',
    alunos: [{
        nome: 'Bon Jovi',
        nota: 9.3
    },{
        nome: 'Wilson',
        nota: 10
    },{
        nome: 'Steve Taylor',
        nota: 8.9
   }]
}]

const getNotaDoAluno = aluno => aluno.nota 
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma) // esse metodo getDaTurma vai varrer todo array e extrair a nota da turma
console.log(notas1)