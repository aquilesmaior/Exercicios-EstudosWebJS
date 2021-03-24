const valor = 'Global'

function minhaFuncao() {
    console.log('res=',valor)
}


function exec() {
    const valor = 'local'
    minhaFuncao();
}

exec()


/* 
    O exemplo acima nos mostra o contexto do qual uma função funciona
    note que chamamos a funcao exec() a qual tem um valor variavel valor='local'
    e logo ela chama a funcao minhaFuncao().

    Porém a minhaFuncao pega a variave valor, a impressão que teríamos
    é que ela pegaria a variavel valor='local', mas não, ela vai 
    pegar a variavel mais próxima dela que no caso é a valor = 'Global'


*/