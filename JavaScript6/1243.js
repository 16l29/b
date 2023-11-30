const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

LINES.map(frase => {
  let palavras = frase.trim().split(" ");

  let tamanho_palavras = 0;
  let qtd_palavras = 0;

  palavras.map(palavra => {
    let characteres = palavra.trim().split("");

    let palavra_valida = true;

    if(palavra.includes(".") && palavra.indexOf(".") < palavra.length) {
      palavra_valida = false;
    }

    for (let i in characteres) {
      if (!isNaN(characteres[i]))
        palavra_valida = false;
    }

    if (palavra_valida) {
      qtd_palavras += 1;
      tamanho_palavras += palavra.length;
      console.log(palavra);
    }
  });

  // if (qtd_palavras === 0) {
  //   console.log(250);
  // } else {
  //   let media = tamanho_palavras / qtd_palavras;

  //   if (media <= 3) console.log(250);
  //   else if (media <= 6) console.log(500);
  //   else console.log(1000);
  // }
});