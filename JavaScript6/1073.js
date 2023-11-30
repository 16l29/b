const input = require("fs").readFileSync("stdin", "utf8");

let N = input.split("\n").map(value => parseFloat(value));

if (N > 5 && N < 2000) {
  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      console.log(`${i}^2 = ${BigInt(i * i).toString()}`);
    }
  }
}