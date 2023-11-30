const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n");

let i = 0;

let quebra_linha = 0;

while (Number(LINES[i]) !== 0) {
  let qtd_nomes = Number(LINES[i]);
  let x = 1;
  let nomes = [];
  let qtd_nome_maior = 0;

  while (x <= qtd_nomes) {
    nomes.push(LINES[i + x]);
    x++;
  }

  nomes.map(nome => {
    if (nome.length > qtd_nome_maior)
      qtd_nome_maior = nome.length;
  });

  if (quebra_linha > 0) console.log("");

  nomes.map(nome => {
    let nome_formatado = "";

    for (let i = 0; i < qtd_nome_maior - nome.length; i++)
      nome_formatado += " ";

    nome_formatado += nome;

    if (nome_formatado.trim().length > 0)
      console.log(`${nome_formatado}`);
  });

  i = i + qtd_nomes + 1;

  teste++;
}