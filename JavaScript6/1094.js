const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n");

let MAX = LINES.shift();

let qtd_coelhos = 0;
let qtd_ratos = 0;
let qtd_sapos = 0;
let total_cobaias = 0;

for (let line in LINES) {
  let [qtd, tipo] = LINES[line].split(" ");

  if (tipo === "C")
    qtd_coelhos += Number(qtd);
  else if (tipo === "R")
    qtd_ratos += Number(qtd);
  else if (tipo === "S")
    qtd_sapos += Number(qtd);

  total_cobaias += Number(qtd);
}

let media_coelhos = Number((qtd_coelhos / total_cobaias) * 100).toFixed(2);
let media_ratos = Number((qtd_ratos / total_cobaias) * 100).toFixed(2);
let media_sapos = Number((qtd_sapos / total_cobaias) * 100).toFixed(2);

console.log(`Total: ${total_cobaias} cobaias`);
console.log(`Total de coelhos: ${qtd_coelhos}`);
console.log(`Total de ratos: ${qtd_ratos}`);
console.log(`Total de sapos: ${qtd_sapos}`);
console.log(`Percentual de coelhos: ${media_coelhos} %`);
console.log(`Percentual de ratos: ${media_ratos} %`);
console.log(`Percentual de sapos: ${media_sapos} %`);