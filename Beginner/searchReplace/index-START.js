/* CHALLENGE
Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/

// With replace
function searchReplace(sentence, word, newWord){
    if(word[0] == word[0].toUpperCase()){
        newWord = newWord[0].toUpperCase() + newWord.slice(1);
    }
    return sentence.replace(word, newWord);
}

// With replace and regex
function searchReplace(sentence, word, newWord){
    if(word[0] == word[0].toUpperCase()){
        newWord = newWord[0].toUpperCase() + newWord.slice(1);
    }
    return sentence.replace(new RegExp(word), newWord);
}

// With indexOf
function searchReplace(sentence, word, newWord){
    if(word[0] == word[0].toUpperCase()){
        newWord = newWord[0].toUpperCase() + newWord.slice(1);
    }
    let position = sentence.indexOf(word);
    return sentence.slice(0, position) + newWord + sentence.slice(position + word.length);
}

console.log(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

module.exports = searchReplace