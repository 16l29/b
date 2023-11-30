const input = require("fs").readFileSync("stdin", "utf8");

var LINES = input.split("\n");

const data = {
  "brasil": "Feliz Natal!",
  "alemanha": "Frohliche Weihnachten!",
  "austria": "Frohe Weihnacht!",
  "coreia": "Chuk Sung Tan!",
  "espanha": "Feliz Navidad!",
  "grecia": "Kala Christougena!",
  "estados-unidos": "Merry Christmas!",
  "inglaterra": " Merry Christmas!",
  "australia": "Merry Christmas!",
  "portugal": "Feliz Natal!",
  "suecia": "God Jul!",
  "turquia": "Mutlu Noeller",
  "argentina": "Feliz Navidad!",
  "chile": "Feliz Navidad!",
  "mexico": "Feliz Navidad!",
  "antardida": "Merry Christmas!",
  "canada": "Merry Christmas!",
  "irlanda": "Nollaig Shona Dhuit!",
  "belgica": "Zalig Kerstfeest!",
  "italia": "Buon Natale!",
  "libia": "Buon Natale!",
  "siria": "Milad Mubarak!",
  "marrocos": "Milad Mubarak!",
  "japao": "Merii Kurisumasu!",
}

const formatted = Object.entries(data).map(([key, value]) => {
  return {
    pais: key,
    mensagem: value,
  }
});

LINES.map(pais => {
  const find = formatted.find(item => item.pais === pais.trim());
  
  if(!find) console.log("--- NOT FOUND ---");
  else console.log(`${find.mensagem.trim()}`);
});