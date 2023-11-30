const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n");

let i = 0;

while (i < LINES.length) {
  let [digito, valor] = LINES[i].split(" ");

  if(digito === "0" || valor === "0") break;

  let novo_valor = "";

  for(let i in valor) {
    if(valor[i] !== digito) {
      novo_valor+= valor[i];
    }
  }

  novo_valor = novo_valor.trim() !== "" ? novo_valor : "0";

  console.log(BigInt(novo_valor).toString());
  i++;
}