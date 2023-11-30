const input = require("fs").readFileSync("stdin", "utf8");

const LINES = input.split("\n").map(item => Number(item));

const MAX = LINES.shift();

let qtd_in = 0;
let qtd_out = 0;

for (let i = 0; i < MAX; i++) {
  if (LINES[i] >= 10 && LINES[i] <= 20) qtd_in++;
  else qtd_out++;
}

console.log(`${qtd_in} in`.trim());
console.log(`${qtd_out} out`.trim());