/*
Translate the provided string to Pig Latin by following the rules below
For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
"pig" = "igpay"
For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
"glove" = "oveglay"
For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
"explain" = "explainway”
*/

// With replace and RexExp
function pigLatin(sentence){
    return sentence.replace(/\b\w+/g, word => (/^[aeiouy]/.test(word) ? word + 'w' : word.replace(/(^[^aeiouy]{1,})(.*)/i, "$2$1")) + 'ay');
}

// With replace
function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay')
}

// With split and map
function pigLatin(sentence){
    return sentence.split(' ').map(word => {
        let vowelIndex = 0;
        while(!"aeiouy".includes(word[vowelIndex].toLowerCase())){
            vowelIndex++;
        }
        return word.slice(vowelIndex) + word.slice(0, vowelIndex) + (vowelIndex ? '' : 'w') + 'ay';
    }).join(' ');
}

console.log(pigLatin('pig glove explain'));
console.log(pigLatin('pig'));
console.log(pigLatin('glove'));
console.log(pigLatin('explain'));

module.exports = pigLatin