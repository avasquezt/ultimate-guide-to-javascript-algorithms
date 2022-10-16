/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// With replace and RegExp
function capSentence(text) {
   // Code goes here
   return text.toLowerCase().replace(/\b./g, char => char.toUpperCase());
}

// With split and replace
function capSentence(text) {
  // Code goes here
  return text.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// With forEach
function capSentence(text) {
  // Code goes here
  let ans = [];
  text.toLowerCase().split(' ').forEach(word =>  ans.push(word[0].toUpperCase() + word.slice(1)));
  return ans.join(' ');
}

// map and replace
function capSentence(text) {
  // Code goes here
  return text.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
}

console.log(capSentence('the tales of scotch!'));

module.exports = capSentence