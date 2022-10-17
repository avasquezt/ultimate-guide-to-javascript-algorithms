/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

// With split and filter
function hammingDistance(stringA, stringB) {
    if(stringA.length !== stringB.length) throw new Error('Strings do not have equal length');
    return stringA.toLowerCase().split('').filter((char, i) => char !== stringB[i].toLowerCase()).length;
}

// With a for loop
function hammingDistance(stringA, stringB) {
    if(stringA.length !== stringB.length) throw new Error('Strings do not have equal length');
    let distance = 0;
    for (let i = 0; i < stringA.length; i++){
        if(stringA[i].toLowerCase() != stringB[i].toLowerCase()){
            distance++;
        }
    }
    return distance;
}

console.log(hammingDistance('river', 'rover'));

module.exports = hammingDistance