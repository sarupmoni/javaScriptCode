/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(0) => 1
    factorial(5) => 120

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function decreasingByOne(number) {
  return number - 1;
}

function getProductOf(num1, num2) {
  return num1 * num2;
}

function factorial(number) {
  let fact = 1;
  let factorialCandidate = number;

  while (factorialCandidate > 1) {
    fact = getProductOf(fact, factorialCandidate);
    factorialCandidate = decreasingByOne(factorialCandidate);
  }

  return fact;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function makeMessage(number, actual, expected) {
  const message = "Factorial of '" + number + "' should be '" + expected;

  return message + "' giving " + actual;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), makeMessage(number, actual, expected));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
}

testAll();