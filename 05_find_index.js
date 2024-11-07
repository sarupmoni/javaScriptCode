/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index ++) {
    if (text[index] === target) {
      return index;
    }
  }
  return -1;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getmessage(text, target, expect, actual) {
  let message = "Index of '" + target + "' in string '" + text; 
  message += "' should be '" + expect + "' and is => " + actual + " ";

  return message;
}

function testFindIndex(text, target, expect) {
  const actual = findIndex(text, target);
  const isPassed = actual === expect;

  console.log(getmessage(text, target, expect, actual), getMark(isPassed));
}

function test() {
  testFindIndex('a', 'a', 0);
  testFindIndex('a', 'b', -1);
  testFindIndex('ab', 'b', 1);
  testFindIndex('abc', 'c', 2);
  testFindIndex('hello world', 'o', 4);
  testFindIndex('repeating iiiiiiii', 'i', 6);
  testFindIndex('not found', 'z', -1);
}

test();