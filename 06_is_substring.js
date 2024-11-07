/*
  Implement the below function that tells if a string is substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSubString(string, startIndex, endIndex) {
  let newString = "";

  while (startIndex < endIndex) {
    newString += string[startIndex];
    startIndex++;
  }

  return newString;
}

function isSubstring(string, subString) {
  if (subString.length > 0) {
    for (let index = 0; index < string.length; index ++) {
      const endIndex = subString.length + index;
      const newSubString = getSubString(string, index, endIndex);

      if (newSubString === subString) {
        return true;
      }
    }
  }
  return false;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
} 

function getMessage(text, target, expected, actual) {
  let message = "Do subString '" + target + "' exists in '" + text + "' ?";
  message += " Expexted : " + expected + " and is => " + actual;

  return message;
}

function testIsSubStrirng(text, target, expected) {
  const actual = isSubstring(text, target);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), getMessage(text, target, expected, actual));
}

function tests() {
  testIsSubStrirng('a', 'a', true);
  testIsSubStrirng('a', 'b', false);
  testIsSubStrirng('a', '', false);
  testIsSubStrirng('hello world', 'worl', true);
  testIsSubStrirng('repeating iiiiiiii', 'iii', true);
  testIsSubStrirng('not found', 'for', false);
}

tests();