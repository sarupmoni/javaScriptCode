/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getString(string, start, end) {
  let newString = "";
  for (let index = start; index <= end; index++) {
    newString += string[index];
  }

  return newString;
}

function max(num1, num2) {
  if (num1 < num2) {
    return num2;
  }
  return num1;
}

function min(num1, num2) {
  if (num1 < num2) {
    return num1;
  }
  return num2;
}

function slice(text, start, end) {
  const givenString = text;
  const startIndex = max(start, 0);
  const endIndex = min(end, givenString.length - 1);
  let subString = getString(givenString, startIndex, endIndex);

  return subString;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(string, start, end, actual) {
  let message = "subString between index '" + start + "-" + end + "' ";
  message += "In String '" + string + "' => ";

  return message + actual;
}

function testSlice(string, startIndex, endIndex, expected) {
  const actual = slice(string, startIndex, endIndex);
  const isPassed = actual === expected;
  const message = getMessage(string, startIndex, endIndex, actual);

  console.log(getMark(isPassed), message);
}

function test() {
  testSlice('a', 0, 0, 'a');
  testSlice('a', 0, 10, 'a');
  testSlice('a', -9, 10, 'a');
  testSlice('hello world', 0, 4, 'hello');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('', 0, 10, '');
}

test();