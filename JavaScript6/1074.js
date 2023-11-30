const input = require("fs").readFileSync("stdin", "utf8");

let LINES = input.split("\n").map(item => parseInt(item));

const MAX = LINES.shift();

for(let i = 0; i < MAX; i++) {  
  if(LINES[i] % 2 === 0 && LINES[i] > 0) console.log("EVEN POSITIVE");
  if(LINES[i] % 2 === 0 && LINES[i] < 0) console.log("EVEN NEGATIVE");
  if(LINES[i] % 2 !== 0 && LINES[i] > 0) console.log("ODD POSITIVE");
  if(LINES[i] % 2 !== 0 && LINES[i] < 0) console.log("ODD NEGATIVE");
  if(LINES[i] === 0) console.log("NULL");
}