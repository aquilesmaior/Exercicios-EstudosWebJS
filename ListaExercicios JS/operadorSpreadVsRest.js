/* OPERADOR rest/spread que é o "..." (isso os 3 pontinhos)
    ... rest (juntar)
    ... spread (espalhar)
*/


// Usando SPREAD (...) com Objeto
// (vamos pegar/clonar os elementos e espalhar dentro de outro array do objeto)
const funcionario = { nome: 'Maria', salario: 123348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


// Usando spread (...) com array
const grupoA = ['João', 'Bruce', 'James']
const grupoFinal = [ 'Dio', ...grupoA, 'Taylor']
console.log(grupoFinal)