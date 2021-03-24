// Criar objeto pessoa e suas caracteristicas com NOTAÇÃO LITERAL
const pessoa = {
    nome: 'Bruce',
    idade: 23,
    altura: 1.70,
    endereco: {  // endereço também é um objeto, porém dentro de pessoa    
        rua: 'Antônio',
        numero: 9,
        bairro: 'Aclimação',
        cidade: 'Uberlândia',
        uf: 'MG'
    }
};


console.log(Object.keys(pessoa)) // Pega todas as chaves do objeto
console.log(Object.values(pessoa)) // mostrará os valores do objeto
console.log(Object.entries(pessoa)) // aqui teremos um array com chave e valor

/* 
Lembrando que objetos é uma coleção de chaves e valor
     _______[exemplo]_________
    |___KEY___|_____VALUE_____|
    |  nome:  |    'Bruce'    |             
    | idade:  |     '23'      |        
    |-------------------------|

*/

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Vamos percorrer o código acima de uma forma mais clara,
// trocando o e "element" pela value
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// console.log(typeof(pessoa)) // se der um typeof() vera que pessoa é um objeto


// TÁ MAS COMO QUE EU CHAMO O OBJETO ENDEREÇO QUE ESTÁ DENTRO DE PESSOA ?
// simples basta colocar pessoa.endereço. Confira:
Object.entries(pessoa.endereco).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


// SUPONHA PRECISE ADICIONAR UMA PROPRIEDADE dataNascimento ao objeto pessoa,
// porém sem ter que alterar diretamente lá no objeto pessoa
// Basta usar o Object.defineProperty

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se colocar false, ele ficará oculto na lista de chaves, mas pode ser acessado normalmente
    writable: false, // se colocar false, ele da um efeito freeze, e não deixará que essa propriedade seja alterada
    value: '28/02/2007'
})

// writable: true . Veja se se você alterar para true, você conseguirá alterar o valor da propriedade
// pessoa.dataNascimento = '13/07/1985'

// CASO QUEIRA ADICIONAR UMA PROPRIEDADE AO OBJETO DENTRO DO OBJETO, 
// BASTA USAR "NOTACAO PONTO" OBJETO.OBJETO DESEJADO
Object.defineProperty(pessoa.endereco, 'cep', {
    enumerable: true,
    writable: false,
    value: 3840000
})
 /* defineProperty é bacana para ler as infos que tu precisa para poder
    preparar seu sql, funciona bem assim tambem */ 



console.log(Object.entries(pessoa))



