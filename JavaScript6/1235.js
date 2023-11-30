const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

let MAX = LINES.shift();

for (let i in LINES) {
  let metade = LINES[i].length / 2;
  let tamanho = LINES[i].length;

  let parte_esquerda = LINES[i].slice(0, metade);
  let parte_direita = LINES[i].slice(metade, tamanho);

  let array_parte_esquerda = parte_esquerda.split("").reverse();
  let array_parte_direita = parte_direita.split("").reverse();

  let frase_correta = array_parte_esquerda.join("") + array_parte_direita.join("");

  console.log(frase_correta);
}