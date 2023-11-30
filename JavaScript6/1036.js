const input = require("fs").readFileSync("stdin", "utf8");

let [a, b, c] = input.split(" ").map(value => parseFloat(value));

const delta = (b * b) - 4 * a * c;

if(delta < 0 || a === 0) {
  console.log("Impossivel calcular")
} else {
  const x1 = (b * -1 + Math.sqrt(delta)) / (2 * a);
  const x2 = (b * -1 - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${x1.toFixed(5)}`);
  console.log(`R2 = ${x2.toFixed(5)}`);
}