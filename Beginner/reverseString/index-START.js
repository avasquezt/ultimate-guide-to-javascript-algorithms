/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Reverse method
function reverseString(text) {
    // Code goes here
    return text.split('').reverse().join('');
}

// With spread operator
function reverseString(text) {
    // Code goes here
    return [...text].reverse().join('');
}

// For loop
function reverseString(text) {
    // Code goes here
    let ans = '';
    for(let i = text.length - 1; i >= 0; i--){
        ans += text[i];
    }
    return ans;
}

// For of
function reverseString(text) {
    // Code goes here
    let ans = '';
    for(let char of text){
        ans = char + ans;
    }
    return ans;
}

// Recursive with slice
function reverseString(text) {
    if(text === ''){
        return ''
    }else{
        return reverseString(text.slice(1)) + text[0];
    }
}

// Recursive with subst
function reverseString(text) {
    if(text === ''){
        return ''
    }else{
        return reverseString(text.substr(1)) + text[0];
    }
}

// With reduce
function reverseString(text) {
    return text.split('').reduce((ans, char) => char + ans, '');
}

console.log(reverseString('abc'))

module.exports = reverseString