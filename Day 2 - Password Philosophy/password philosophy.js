const fs = require('fs');

const text = fs.readFileSync('./pw.txt', 'utf8');
const splitted = text.split('\n');

let validPasswords = 0

splitted.forEach((fullRow) => {
    const splitRow = fullRow.split(' ')
    console.log(splitRow)
    const letter = splitRow[1][0]
    const count = splitRow[2].split(letter)
    //SPlIT INPUTS 
    const inputs = splitRow[0].split('-')

    const minCount = splitRow[0]
    console.log()
    if (count.length - 1 >= inputs[0] && count.length - 1 <= inputs[1]) {
        validPasswords++
    }


})

console.log(validPasswords)
