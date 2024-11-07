/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function checkEqual(charA, charB) {
  return charA === charB;
}

function replace(text, match, replacement) {
  const string = text;
  const charToReplace = match;
  const replaceWith = replacement;
  let newString = "";

  for (let index = 0; index < string.length; index++) {
    const isStringsEqual = checkEqual(string[index], charToReplace);
    newString += isStringsEqual ? replaceWith : string[index];
  }

  return newString;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testCharReplace(string, charToReplace, charToReplaceWith, expect) {
  const actual = replace(string, charToReplace, charToReplaceWith);
  const isPassed = actual === expect;
  let message = "String Before Replacement: '" + string;
  message += "',\nString After Replaced with '" + charToReplaceWith;
  message +=  "' inplace of '" + charToReplace + "', gives '" + actual + "'\n";

  console.log(getMark(isPassed), message);
}

function testAll() {
  testCharReplace('a', 'a', 'o', 'o');
  testCharReplace('a', 'a', '_', '_');
  testCharReplace('a', 'a', '', '');
  testCharReplace('a', '', 'b', 'a');
  testCharReplace('hello world', 'l', 'n', 'henno wornd');
  testCharReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testCharReplace('', 'd', 'e', '');
}

testAll();