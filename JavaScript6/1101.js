const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n");

LINES.map(line => {
  let [M, N] = line.split(" ").map(item => Number(item));

  if (M > 0 && N > 0) {
    let maior = M > N ? M : N;
    let menor = M < N ? M : N;
    let soma = 0;

    let output = "";

    for (let i = menor; i <= maior; i++) {
      output += `${i} `
      soma = soma + i;
    }

    output += `Sum=${soma}`

    console.log(output);
  }
});