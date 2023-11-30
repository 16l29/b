var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var vogais = "aeiou";
var risada = input.split('\n')[0];

function ehEngracada(risada) {
  var vogaisRisada = "";
  for (var i = 0; i < risada.length; i++) {
    if (vogais.includes(risada[i])) {
      vogaisRisada += risada[i];
    }
  }
  var vogaisRisadaInversa = vogaisRisada.split('').reverse().join('');
  return vogaisRisada === vogaisRisadaInversa;
}

console.log(ehEngracada(risada) ? "S" : "N");