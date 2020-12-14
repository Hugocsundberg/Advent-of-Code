const fs = require('fs');

const text = fs.readFileSync('./input.txt', 'utf8');
const boardingPasses = text.split('\n');
let highestId = 0

boardingPasses.forEach((boardingPass) => {
    let rowSpan = [0, 128]
    let colSpan = [0, 8]
    const splitPass = boardingPass.split('')

    splitPass.forEach((letter) => {
        if (letter === 'F') {
            if (rowSpan[0] !== 0) {
                rowSpan[1] = ((rowSpan[1] - rowSpan[0]) / 2) + rowSpan[0]
            } else {
                rowSpan[1] = rowSpan[1] / 2
            }
        } else if (letter === 'B') {
            if (rowSpan[0] !== 0) {
                rowSpan[0] = ((rowSpan[1] - rowSpan[0]) / 2) + rowSpan[0]
            } else {
                rowSpan[0] = rowSpan[1] / 2
            }
        } else if (letter === 'L') {
            if (colSpan[0] !== 0) {
                colSpan[1] = ((colSpan[1] - colSpan[0]) / 2) + colSpan[0]
            } else {
                colSpan[1] = colSpan[1] / 2
            }
        } else if (letter === 'R') {
            if (colSpan[0] !== 0) {
                colSpan[0] = ((colSpan[1] - colSpan[0]) / 2) + colSpan[0]
            } else {
                colSpan[0] = colSpan[1] / 2
            }
        }
    })
    let seatId = rowSpan[0] * 8 + colSpan[0]
    if (seatId > highestId) {
        highestId = seatId
    }

})

console.log('highest is is: ' + highestId)
