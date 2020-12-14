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





    // console.log(`this is min: ${ inputs[0]}`)
    // console.log(`this is max: ${ inputs[1]}`)

    // for (i = inputs[0]; i <= inputs[1]; i++) {
    //     console.log(i)
    //     if (splitRow[2].split('')[i] === letter) {
    //         passwordIsValid = true
    //     }
    // }

    // splitRow[2].split('').forEach(letterparam => {
    //     if (letterparam === letter) {
    //         letterCount++
    //     }

    // });
    console.log(passwordIsValid)
    if (passwordIsValid) {
        validPasswords++
    }

})

console.log(`Valid password count is: ${validPasswords}`)
