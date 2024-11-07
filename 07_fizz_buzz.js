/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  const isdivisibleBy3 = isDivisible(number, 3);
  const isdivisibleBy5 = isDivisible(number, 5);

  if (isdivisibleBy3 && isdivisibleBy5) {
    return "fizzbuzz";
  }
  if (isdivisibleBy3) {
    return "fizz";
  }
  if (isdivisibleBy5) {
    return "buzz";
  }
  return "" + number;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(number, actual, expected) {
  let message = "Number :" + number + "\n Expexted : " + expected;
  message += "  Result => " + actual;

  return message;
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), getMessage(number, actual, expected));
}

function tests() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(9, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(20, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(30, "fizzbuzz");
  testFizzBuzz(0, "fizzbuzz");
  testFizzBuzz(7, "7");
  testFizzBuzz(1, "1");
}

tests();