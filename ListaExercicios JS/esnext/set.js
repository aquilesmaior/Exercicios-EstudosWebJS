// SET não aceita repetição e não aceita ser indexado
const bandas = new Set()
bandas.add('Iron Maiden')
bandas.add('Metallica').add('Bon Jovi').add('Black Smoke')
bandas.add('Angra')
bandas.add('Manowar')
bandas.add('Iron Maiden') // como esse existe então ele não repete


console.log(bandas) // Set { 'Iron Maiden', 'Metallica', 'Bon Jovi', 'Black Smoke', 'Angra' }
console.log(bandas.size) // retorna quantos elementos
console.log(bandas.has('iron Maiden')) // tem a banda 'i'ron Maiden ? (resposa é false)
console.log(bandas.has('Iron Maiden')) // tem a banda 'i'ron Maiden ? (resposa é true)
console.log(bandas.delete('Manowar')) // vai deletar manowar do array
console.log(bandas.has('Manowar')) // tem a banda Manowar ?
console.log(bandas) // só pra mostrar que deletamos o manowar mesmo



// CRIANDO ARRAY DE VARIAS POSICOES DENTRO DE ARRAY CHAVE E VALOR
// com o set podemos criar de forma simples assim:
const nomes = ['Alicia','Dio','James', 'Alicia', 'Tobbias','Dio','Bruce']
const nomesSet = new Set(nomes) // passando um array
console.log(nomesSet) // repetições foram removidas


        // SÓ LEMBRANDO QUE SET NÃO ACEITA REPETIÇÃO OK \\