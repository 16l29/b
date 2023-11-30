var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  const words = lines[i].trim().split(/\s+/);
  let hiddenMessage = '';

  for (let j = 0; j < words.length; j++) {
    hiddenMessage += words[j].charAt(0);
  }

  console.log(hiddenMessage);
}
