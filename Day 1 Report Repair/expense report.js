const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf8');
const inputs = text.split('\n');

intInputs = inputs.map((input) => {
    return Number(input)
})

intInputs.forEach((input) => {
    intInputs.forEach((input2) => {
        if (input + input2 === 2020) {
            console.log(input * input2)
        }
    })
})