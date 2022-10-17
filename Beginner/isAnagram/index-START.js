/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

// With sort
function isAnagram(stringA, stringB) {
    return stringA.split('').sort().join('') == stringB.split('').sort().join('');
}

// With replace
function isAnagram(stringA, stringB) {
    let notSeen = stringB.slice();
    for(let char of stringA){
        notSeen = notSeen.replace(char, '');
    }
    return notSeen.length == 0;
}

// With a map
function isAnagram(stringA, stringB) {
    function map(string){
        let charMap = new Map();
        for(let char of string){
            charMap.set(char, charMap.get(char) + 1 || 1);
        }
        return charMap
    }

    let charMapA = map(stringA);
    let charMapB = map(stringB);

    if (charMapA.size != charMapB.size) return false;

    for(let [char, val] of charMapA){
        if(val !== charMapB.get(char)){
            return false;
        }
    }
    
    return true;
}

console.log(isAnagram('silent', 'listen'));

module.exports = isAnagram