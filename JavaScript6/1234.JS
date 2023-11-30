const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

LINES.map(frase => {
  let uppercase = true;
  let frase_dancante = "";

  for (let i in frase) {
    if (frase[i] === " ") {
      frase_dancante += " ";
    } else {
      frase_dancante += uppercase ? frase[i].toUpperCase() : frase[i].toLowerCase();
      uppercase = !uppercase;
    }
  }
  
  console.log(frase_dancante);
});