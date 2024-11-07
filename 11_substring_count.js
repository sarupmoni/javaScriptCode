/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

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

function occurrences(string, substring) {
  let numberOfOccurences = 0;

  for (let index = 0; index < string.length; index++) {
    const endIndex = substring.length + index;
    const subStringCandidate = getSubString(string, index, endIndex);
    if (subStringCandidate === substring) {
      numberOfOccurences += 1;
    }
  }

  return numberOfOccurences;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(string, subString, expected, actual) {
  let message = "Occurence of '" + subString + "' in '" + string;
  message += "' expected: " + expected + " and is ---> " + actual;

  return message;
}

function testOccurence(string, subString, expected) {
  const actual = occurrences(string, subString);
  const isPassed = actual === expected;

  console.log(getMark(isPassed));
  console.log(getMessage(string, subString, expected, actual));
}

function tests() {
  testOccurence('a', 'a', 1);
  testOccurence('a', 'o', 0);
  testOccurence('a', 'A', 0);
  testOccurence('aaaaa', 'a', 5);
  testOccurence('aaaaa', 'aa', 4);
  testOccurence('hello world', 'l', 3);
  testOccurence('hello world', 'll', 1);
  testOccurence('hello world', 'world', 1);
  testOccurence('hello world', 'zebra', 0);
}

tests();