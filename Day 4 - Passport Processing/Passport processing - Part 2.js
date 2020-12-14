const fs = require('fs');

const text = fs.readFileSync('./inputs.txt', 'utf8');
const passports = text.split('\n\n');
let numberOfValidPassports = 0

passports.forEach((passport) => {
    let mustHaveFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
    //Splits up fields
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

    if (mustHaveFields.length === 0) {
        let passportIsOk = true
        fieldValueList = fields.map((field) => {
            return field.split(':')
        })

        fieldValueList.forEach((fieldValue) => {
            if (fieldValue[0] === 'pid') {
                if (fieldValue[1].length !== 9) {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'ecl') {
                if (fieldValue[1] === 'amb' || fieldValue[1] === 'blu' || fieldValue[1] === 'brn' || fieldValue[1] === 'gry' || fieldValue[1] === 'grn' || fieldValue[1] === 'hzl' || fieldValue[1] === 'oth') {
                } else {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'hcl') {
                if (fieldValue[1].match(/#[a-zA-Z0-9_][a-zA-Z0-9_][a-zA-Z0-9_][a-zA-Z0-9_][a-zA-Z0-9_][a-zA-Z0-9_]$/) === null) {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'hgt') {
                if (fieldValue[1].match(/cm/) !== null) {
                    if (fieldValue[1].match(/[0-9]+/) < 150 || fieldValue[1].match(/[0-9]+/) > 193) {
                        passportIsOk = false
                    }
                } else if (fieldValue[1].match(/in/) !== null) {
                    if (fieldValue[1].match(/[0-9]+/)[0] < 59 || fieldValue[1].match(/[0-9]+/)[0] > 76) {
                        passportIsOk = false
                    }
                } else {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'eyr') {
                if (fieldValue[1].match(/[\d][\d][\d][\d]/) !== null) {
                    if (fieldValue[1] < 2020 || fieldValue[1] > 2030) {
                        passportIsOk = false
                    }
                } else {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'iyr') {
                if (fieldValue[1].match(/[\d][\d][\d][\d]/) !== null) {
                    if (fieldValue[1] < 2010 || fieldValue[1] > 2020) {
                        passportIsOk = false
                    }
                } else {
                    passportIsOk = false
                }
            } else if (fieldValue[0] === 'byr') {
                if (fieldValue[1].match(/[\d][\d][\d][\d]/) !== null) {
                    if (fieldValue[1] < 1920 || fieldValue[1] > 2002) {
                        passportIsOk = false
                    }
                } else {
                    passportIsOk = false
                }
            }
        })
        if (passportIsOk) {
            numberOfValidPassports++
        }
    }



})
const string = '#123adbc'
console.log(`Number of valid passports is: ${numberOfValidPassports}`)
