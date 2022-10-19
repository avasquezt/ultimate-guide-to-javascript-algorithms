// Given an integer, return an integer that has the reverse ordering of that which was received. E.g

// reverseInteger(-123) // should return -321

// with reverse
function reverseInteger(n){
    let result = String(n).split('').reverse().join('');
    return Number(n < 0 ? `-${result.slice(0,-1)}` : result);
}

// with reduce
function reverseInteger(n){
    let result = String(n).split('').reduce((acc, n) => n + acc,'');
    return Number(n < 0 ? `-${result.slice(0,-1)}` : result);
}

// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    return (reversedNumber * Math.sign(num))
}

console.log(reverseInteger(12345));
console.log(reverseInteger(-123));
console.log(reverseInteger(9000));