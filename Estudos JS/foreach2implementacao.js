/*
    Criando uma implementação sobre um método do sistema
    no caso iremos implementar sobre o foreach 
    Ou seja iremos criar um foreach do zero usando a funçao callback
*/

Array.prototype.forEach2 = function(callback) {
    for(let i=0; i < this.length; i++){ //this.length é o tamanho do array
        callback(this[i], i, this)
    }
}

// Percorrer array com forEach

const cantores = ['Bruce', 'James', 'Dio', 'Andy', 'Robert']

// com apenas dois parametros
cantores.forEach2(function(nome, indice) {  // lembrando que o foreach recebe 3 parametros (nome, indice, array)
    console.log(`${indice + 1}) ${nome}`)
    //console.log(indice + 1,')', nome) // poderia se assim também
})