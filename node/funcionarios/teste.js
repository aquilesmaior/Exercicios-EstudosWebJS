var array = [885.9, 984.9, 444.9, 528.9, 528.9];
var min = array.reduce(function(a, b) {
  return Math.min(a, b);
});

console.log(min); // 444.9


/*
CASO SEU ARRAY DE VALOR SEJA STRING, TU DEVES passar o map(number) antes
var array = ["885.9", "984.9", "444.9", "528.9", "528.9"];
var min = array.map(Number).reduce(function(a, b) {
  return Math.min(a, b);
});

console.log(min); // 444.9
*/