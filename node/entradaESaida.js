// flag para pegar parametro a partir do terminal.
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) // teste
//------------------------------------------------


if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') // mostra no console
    process.exit() // encerra o processo 
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => { // entrada padrão, no caso seria nosso teclado
        const nome = data.toString().replace('\r\n', ' ') // como o enter vem junto qdo é teclado, então precisamos substituir essa quebra de linha'enter' por nada

        process.stdout.write(` faaaala: ${nome}!!!`)
        process.exit() 
    })
}


/*
   OBSERVAÇÕES

   \r\n - pular linhas no windows

   \n - linux ou mac


*/