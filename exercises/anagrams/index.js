// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  /*
  let strA = charMap(stringA);
  let strB = charMap(stringB);

  if(Object.keys(strA).length != Object.keys(strB).length) {
    return false;
  } 

  for(let char in strA){
    if(strA[char] !== strB[char]){
      return false;
    }
    return true;
  }
  */

  if(clean(stringA) == clean(stringB)){
    return true;
  } else {
    return false;
  }

}

function clean(str){
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort('')
    .join('');
}

// Helper function to build a Character Map of {key, val}
function charMap(str){
  let charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
