const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\r\n");

LINES.map(LINE => {
  let texto = LINE.split("");

  let open_underline = true;
  let open_bold = true;

  for (let i in texto) {
    if (texto[i] === "_") {
      texto.splice(i, 1, open_underline ? "<i>" : "</i>");
      open_underline = !open_underline;
    }

    if (texto[i] === "*") {
      texto.splice(i, 1, open_bold ? "<b>" : "</b>");
      open_bold = !open_bold;
    }
  }

  let texto_formatado = texto.join("");

  console.log(texto_formatado);
});