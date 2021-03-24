/* IIFE - Immediately Inovoked Function Expression
   FUNÇÃO AUTO INVOCADA

   Serve para não tocar, interferir no escopo global

*/   

(function() {
    // ou seja tudo que você criar aqui dentro ficará aqui dentro
    let criadoAqui = "essa variavel não é acessada de fora desse escopo"
    console.log(criadoAqui) //aqui funciona
})()


// console.log(criadoAqui) se tentar acessar por aqui, dará erro pois não a encontrará
