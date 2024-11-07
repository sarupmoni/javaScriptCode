/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getSubString(string, startIndex, endIndex) {
  let newString = "";

  while (startIndex < endIndex) {
    newString += string[startIndex];
    startIndex += 1;
  }

  return newString;
}

function endsWith(string, substring) {
  if (substring.length < 1) { 
    return true;
  }
  const starIndex = string.length - substring.length;
  const endIndex = string.length;
  const subStringCandidate = getSubString(string, starIndex, endIndex);

  return subStringCandidate === substring;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(string, subString, expected, actual) {
  let message = "Do '" + subString + "' occur at end of '" + string;
  message += "' expected: " + expected + " and is => " + actual;

  return message;
}

function testStringEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  const isPassed = actual === expected;

  console.log(getMark(isPassed));
  console.log(getMessage(string, subString, expected, actual));
}

function tests() {
  testStringEndsWith('a', 'a', true);
  testStringEndsWith('a', 'o', false);
  testStringEndsWith('a', ' ', false);
  testStringEndsWith('a', '', true);
  testStringEndsWith('hello world', 'ld', true);
  testStringEndsWith('hello world', 'wor', false);
  testStringEndsWith('hello world', 'world', true);
  testStringEndsWith('hello world.', 'world', false);
  testStringEndsWith('hello world', 'hello', false);
}

tests();