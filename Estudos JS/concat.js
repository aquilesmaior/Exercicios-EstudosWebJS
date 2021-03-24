/*
    CONCAT - Método de concatenação de Arrays
*/


const filhas = ['Melize','Louise']
const filhos = ['Maximus', 'João']
const todos = filhas.concat(filhos) // vai juntar os dois arrays em todos
console.log(todos) 


// mesmo tendo elementos antes do .concat, ele concatena junto, veja:
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))