/* for Of - nova funcionabilidade onde você pode percorrer
    os elementos em vez de só os indices igual é no for in
*/

for (let letra of "ferrari"){ // percorreu todas letras
    console.log(letra) 
}

const nomeBandas = ['Metallica', 'Iron M', 'Molejão']

for (let i in nomeBandas) { // antigo for in pelos índices 
    console.log('por indice = ',i)
}


// em vez do for in , agora existe essa possibilidade de percorrer pelos elementos
for (let bandas of nomeBandas) { 
    console.log('por elementos = ', bandas)
}
   

const bandasMap = new Map([
    ['Metallica', { bandaMetal: true }],
    ['Iron M',  { bandaMetal: true }],
    ['Molejão', { bandaMetal: false }]
])

for (let bandas of bandasMap) { // percorrer chave e valor
    console.log(bandas)
}

for (let chave of bandasMap.keys()) {// percorrer só a chave
    console.log(chave)
}

for (let valor of bandasMap.values()) { // percorre só os valores
    console.log(valor)
}

for (let [chave, valor] of bandasMap.entries()) { // percorrer as entries
    console.log(chave, valor)
}