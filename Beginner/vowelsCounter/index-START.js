/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// With filter method
function vowelsCounter(text) {
    return text.split('').filter(char => 'aeiouAEIOU'.includes(char)).length;
}

// With replace and regex
function vowelsCounter(text) {
    return text.replace(/[^aeiou]/gi, '').length;
}

// With match and regex
function vowelsCounter(text) {
    return (text.match(/[aeiou]/gi)||[]).length;
}

// // With for loop
// function vowelsCounter(text) {
//     let count = 0;
//     for (let i = 0, string = text.toLowerCase(); i < text.length; i++){
//         if ('aeiou'.includes(string[i])){
//             count++
//         }
//     }
//     return count;
// }

// // With for of loop
// function vowelsCounter(text) {
//     let count = 0;
//     for (let char of text.toLowerCase()){
//         if ('aeiou'.includes(char)){
//             count++
//         }
//     }
//     return count;
// }

module.exports = vowelsCounter;
