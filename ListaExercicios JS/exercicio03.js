/*
   03)​ Crie uma função que recebe dois parâmetros, 
       base e expoente, e retorne a base elevada ao expoente.  
*/


function calcularExp(base, expo) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expo)
    //Método novo:
    resolve = base ** expo

    return console.log(resolve)
}


calcularExp(2, 4)

// PROCURAR SEMPRE USAR OS METODOS NOVOS NO CASO O **
