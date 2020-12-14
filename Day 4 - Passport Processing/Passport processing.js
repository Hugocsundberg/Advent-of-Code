const fs = require('fs');

const text = fs.readFileSync('./inputs.txt', 'utf8');
const passports = text.split('\n\n');
let numberOfValidPassports = 0


passports.forEach((passport) => {
    let mustHaveFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    const rows = passport.split('\n')
    let fields = []
    rows.forEach((row) => {
        const rowArray = row.split(' ')
        rowArray.forEach((field) => {
            fields.push(field)
        })
    })
    fields.forEach((field) => {
        mustHaveFields.forEach((mustHaveField) => {
            if (mustHaveField === field.substr(0, 3)) {
                const fieldIndex = mustHaveFields.indexOf(field.substr(0, 3))
                mustHaveFields.splice(fieldIndex, 1)
            }
        })
    })

    // console.log(fields, mustHaveFields)
    if (mustHaveFields.length === 0) {
        numberOfValidPassports++
    }
})

console.log(`Number of valid passports is: ${numberOfValidPassports}`)
