/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

// With for of
function maxRecurringChar(text) {
    // Code goes here
    let occurrences = {'' : 0}, max = '';
    for(let char of text){
        occurrences[char] = (occurrences[char] + 1) || 1;
        max = occurrences[char] > occurrences[max] ? char : max;
    }
    return max;
}


// With for of and arrays
function maxRecurringChar(text) {
    // Code goes here
    let occurrences = {};
    for(let char of text){
        occurrences[char] = (occurrences[char] + 1) || 1;
    }

    let charArray =[];
    let vaulesArray = [];
    let maxCharValue = 0;

    charArray = Object.keys(occurrences);
    vaulesArray = Object.values(occurrences);
    maxCharValue = Math.max(...vaulesArray);

    return charArray[vaulesArray.indexOf(maxCharValue)];
}

// With set and sort
function maxRecurringChar(text) {
    let chars = Array.from(new Set(text));
    return chars.sort((a,b) => text.match(new RegExp('['+b+']', 'g')).length - text.match(new RegExp('['+a+']', 'g')).length)[0];
}

// With double for
function maxRecurringChar(text) {
    // Code goes here
    let occurrences = {};
    for(let char of text){
        occurrences[char] = (occurrences[char] + 1) || 1;
    }

    let maxCharValue = 0;
    let maxChar = '';

    for (let char in occurrences) {
        if (occurrences[char] > maxCharValue) {
            maxCharValue = occurrences[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxRecurringChar('aabacada'));


module.exports = maxRecurringChar;