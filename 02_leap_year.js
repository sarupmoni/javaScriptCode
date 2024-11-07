/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function divisibleBy(year, value) {
  return year % value === 0;
}

function isLeapYear(year) {
  const leapYearCandidate = year;
  const isYearDivisbleBy4 = divisibleBy(leapYearCandidate, 4);
  const isYearDivisbleBy100 = !divisibleBy(leapYearCandidate, 100);
  const isYearDivisbleBy400 = divisibleBy(leapYearCandidate, 400);

  return isYearDivisbleBy4 && (isYearDivisbleBy100 || isYearDivisbleBy400);
}

function getMessage(year, actual, expected) {
  let message = " Is year " + year + " a LeapYear ? expected '";
  message += expected + "' giving result '" + actual + "'";

  return message;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testLeapYear(year, expected) {
  const actual = isLeapYear(year);
  const isPassed = actual === expected;

  console.log(getMark(isPassed) + getMessage(year, actual, expected));
}

function testAll() {
  testLeapYear(1, false);
  testLeapYear(4, true);
  testLeapYear(1896, true);
  testLeapYear(2001, false);
  testLeapYear(1900, false);
}

testAll();