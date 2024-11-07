/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(number) {
  let previousTerm = -1;
  let currentTerm = 1;
  let nextTerm = 0;

  for (let index = 0; index < number; index ++) {
    nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return nextTerm;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(number, actual, expected) {
  let message = "nthFibonacciTerm(" + number + ") should map => '" + expected;
  message += "' and is ---> " + actual;

  return message;
}

function testNthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), getMessage(number, actual, expected));
}

function tests() {
  testNthFibonacciTerm(0, 0);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
  testNthFibonacciTerm(7, 8);
  testNthFibonacciTerm(8, 13);
  testNthFibonacciTerm(9, 21);
  testNthFibonacciTerm(10, 34);
}

tests();