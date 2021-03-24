/*
    FUNÇÃO CONSTRUTORA

    Função construtora são como as classes no JAVA
    porém no javascript temos a função construtora.

*/

// Vamos criar uma função construtora Carro
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado (ou seja interno pra essa função)
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}


const uno = new Carro // instanciando a função
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())




    /*
    observe que no exemplo acima 
    Carro é uma função
    ferrari é um objeto

    console.log(typeof Carro)
    console.log(typeof ferrari)
    */