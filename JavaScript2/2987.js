const { readFileSync } = require("fs")
const [letter] = readFileSync("/dev/stdin", "ascii")

const letters = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

console.log(letters.indexOf(letter))