const _ = require('lodash');

// testando um valor aleatório de 2 em 2 segundos
setInterval(() => console.log(_.random(5, 1000)), 5000)
