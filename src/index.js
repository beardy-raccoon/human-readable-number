module.exports = function toReadable(number) {
    const keys = {
        0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    const keysTeen = {
        0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen'
    }

    const keysTy = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
    }

    let n = number.toString();

    if (n.length === 1) {
        return `${n === '0' ? 'zero' : keys[n]}`
    } else if (n.length === 2) {
        return `${n[0] === '1' ? keysTeen[n[1]] : keysTy[n[0]] + (n[1] !== '0' ?  ' ' + keys[n[1]] : '')}`
    } else if (n.length === 3 && n[1] !== '0') {
        return `${keys[n[0]]} hundred ${n[1] === '1' ? keysTeen[n[2]] : keysTy[n[1]] + (n[2] !== '0' ? ' ' + keys[n[2]] : '')}`
    } else {
        return `${keys[n[0]]} hundred${n[2] !== '0' ? ' ' + keys[n[2]] : ''}`
    }
}
