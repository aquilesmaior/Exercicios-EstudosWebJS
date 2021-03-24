// ARROW FUNCTION - priorisa muito funcao de uma unica linha
const soma = (a, b) => a + b
console.log(soma(2,3))

// ARROW FUNCTION com (this) - this está associado ao local onde uma função foi escrita
const nome = () => console.log(this === exports)
const sNome = nome.bind({})
nome()
sNome()


// PARAMETRO DEFAULT - alterando valor padrão
function log(texto = 'valor padrão alterado') {
    console.log(texto)
}

log(undefined) // undefined assume, null não
log('sou mais forte')

 
// OPERADOR REST - spread (espalhar)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5)) 
