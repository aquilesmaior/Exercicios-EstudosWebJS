// Criando uma classe personagem Character = Personagem

class Character {
    constructor (firtsName, lastName, yearOld, ocupation)  {
        this.firtsName = firtsName
        this.lastName = lastName
        this.yearOld = yearOld
        this.ocupation = ocupation
    }
}

/*
get isSimpson () {
    return this.lastName === 'Simpson'
}
*/

// instanciando um personagem
const characters = [ 
    new Character(
    'Ana',
    'Krambeck',
    '34',
    'Elementary School Teacher'
   ),
   new Character(
       'Lisa',
       'Simpson',
       '16',
       'Student'
   ),
   new Character(
       'Moe',
       'Szyslak',
       '49',
       'Bartender'
   ),
]

function isSimpson () {
    return this.lastName === 'Simpson'
}

console.log('teste');
console.log(isSimpson('ana'))



