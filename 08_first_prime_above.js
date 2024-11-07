/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function firstPrimeAbove(number) {

  for (let nextPrimeCandidate = number + 1; nextPrimeCandidate > 0;nextPrimeCandidate++) {

    let index = 2;
    while (nextPrimeCandidate % index !== 0 && index < nextPrimeCandidate) {
      index++;
    }

    if (nextPrimeCandidate === index) {
      return index;
    }
  }
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(number, actual, expected) {
  let message = "Number :" + number + "\n Expexted : " + expected;
  message += "  Result => " + actual;

  return message;
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), getMessage(number, actual, expected));
}

function tests() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(15, 17);
  testFirstPrimeAbove(16, 17);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(11, 13);
}

// tests();