const input = require("fs").readFileSync("stdin", "utf8");

let [X, Y] = input.split("\n").map(value => parseFloat(value));

let menor = X < Y ? X : Y;
let maior = X > Y ? X : Y;

let soma = 0;

for(let i = menor + 1; i < maior; i++) {
  if(i % 2 !== 0) soma = soma + i;
}

console.log(soma);