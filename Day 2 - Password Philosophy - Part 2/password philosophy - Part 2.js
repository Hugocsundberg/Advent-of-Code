const fs = require('fs');

const text = fs.readFileSync('./pw.txt', 'utf8');
const splitted = text.split('\n');

let validPasswords = 0

splitted.forEach((fullRow) => {

    const splitRow = fullRow.split(' ')
    const inputs = splitRow[0].split('-')
    const letter = splitRow[1][0]
    //const count = splitRow[2].split(letter).length - 1
    //SPlIT INPUTS 
    let passwordIsValid = false


    if (splitRow[2].split('')[inputs[0] - 1] === letter || splitRow[2].split('')[inputs[1] - 1] === letter) {
        passwordIsValid = true
    }
    if (splitRow[2].split('')[inputs[0] - 1] === letter && splitRow[2].split('')[inputs[1] - 1] === letter) {
        passwordIsValid = false
    }

    console.log(passwordIsValid)
    if (passwordIsValid) {
        validPasswords++
    }

})

console.log(`Valid password count is: ${validPasswords}`)
