/* ESTUDOS SOBRE OBJETO

   Objeto é uma coleção de chave e valor ->  grupo de pares e valor
    Mas o que seria essa coleção de chave e valor, vamos supor que tenhamos
    um objeto que seja um carro, e nele teremos o modelo do carro e o ano.
    Então o gruopo de chave e valor tem que retornar algo do tipo:
    { modelo: 'Megane', ano: 2020 }

    dentro de um objeto pode ter outro objeto!

   Imagine que você tem um objeto que é um Produto
   este produto pode ser uma tv, celular... qualquer coisa
   ele terá nome, mode, cor, preço...

   Oservando que criar um objeto no JS é mais simples do que em outras linguagens, 
   por exemplo em C#, JAVA... a gente cria primeiro a classe e depois instancia o objeto
   confira abaixo como é bem mais simples em JS:
*/

// Criando um Objeto
const carro = {} //const meuProduto = {}
carro.nome = 'Civic'
carro.ano = 2020
carro['Detalhes do Carro'] = 'Esse carro é japones' //Podemos criar atributos com espaço, porém não recomendo. Atributos no caso seria essa parte Obejto['Detalhes do Carro']
console.log(carro);


// Uma outra forma de criar objetos em JavaScript seria cria-lo dentro da chaves, confira.
const moto = {
    marca: 'honda',
    ano: '2020',
    ['Detalhes da motoca']: '600cc black' // Lembrando que não é bom usar espaços no atributo. Em vez de detalhes da motoca, Detalhes seria melhor.
}
console.log(motoh);


/* POSSO TER UM OBJETO DENTRO DE OUTRO OBJETO ? 
   pode sim, vamos supor que seu objeto seja um aluno
   e dentro de aluno você tenha endereço, então podes
   criar um objeto endereço para rua, numero, bairro...
*/