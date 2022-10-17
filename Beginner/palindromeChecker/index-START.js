/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

// reverse
function palindromeChecker(text) {
    // Code goes here
    return text === text.split('').reverse().join('');
}

// With every
function palindromeChecker(text) {
    // Code goes here
    return text.split('').every((char, i) => char === text.at(-(i+1)));
}

// With for
function palindromeChecker(text) {
    // Code goes here
    for(let i = 0; i < text.length / 2; i++){
        if(text[i] !== text.at(-(i+1))) return false;
    }
    return true;
}

console.log(palindromeChecker('text'))
console.log(palindromeChecker('racecar'))

module.exports = palindromeChecker;