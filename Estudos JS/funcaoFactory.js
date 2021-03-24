// FUNÇÃO FACTORY TEM A FUNÇÃO DE FABRICAR OBJETOS 

// Factory Simples
function criarPessoa() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


// Factory Passando os valores por parametro
function criarProduto(nome, modelo, preco) {
    return{
        nome,
        modelo,
        preco,
        desconto: 0.1 // aqui definimos um desconto padrão de 10%
    }
}

// veja que agora podemos cirar quantos objetos quisermos
console.log(criarProduto('Carro', 'Civic', 30000.00))
console.log(criarProduto('Moto', 'Kawasaki', 50000.00))
console.log(criarProduto('Notebook', 'Sony', 3000.00))

