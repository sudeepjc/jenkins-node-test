
function sumNumbers (numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
}

module.exports = sumNumbers;