const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

for(let i = 0; i < LINES.length; i += 2) {
  let primeira_string = LINES[i];
  let segunda_string = LINES[i + 1];

  let tamanho = primeira_string.length;
  let maior_substring = 0;

  for(let i = 0; i < tamanho; i++) {
    for(let j = i; j <= tamanho; j++) {
      let substring = primeira_string.slice(i, j);

      if(substring.length > 0) {
        if(segunda_string.includes(substring)) {
          if(substring.length > maior_substring) 
            maior_substring = substring.length;
        }
      }
    }
  }

  console.log(maior_substring);
}