/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// Reduce
function longestWord(text) {
    return text.split(' ').reduce((acc, word) => word.length > acc.length ? word : acc);
}

// Sort
function longestWord(text) {
    return text.split(' ').sort((a, b) => b.length - a.length)[0];
}

// For loop
function longestWord(text) {
    let wordArray = text.split(' ');
    let ans = '';
    for(let i = 0; i < wordArray.length; i++){
        if(wordArray[i].length > ans.length){
            ans = wordArray[i];
        }
    }
    return ans;
}

console.log(longestWord('Top Shelf Web Development Training on Scotch'));

module.exports = longestWord