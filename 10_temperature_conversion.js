/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function convertCelciusToAnotherUnit(convertTo, value) {
  let temperature = 0;
  switch(convertTo) {
    case 'K':
      temperature = value + 273.15;
      return temperature;
    case 'F':
      temperature = 9 * value / 5 + 32;
      return temperature;
    case 'C':
      return value;
    default:
      return NaN;
  }
}

function convertFahrenheitToAnotherUnit(convertTo, value) {
  let temperature = 0;
  switch(convertTo) {
    case 'K':
      temperature = (value - 32) * 5/9 + 273.15;
      return temperature;
    case 'C':
      temperature = (value - 32) * 5/9;
      return temperature;
    case 'F':
      return value;
    default:
      return NaN;
  }
}

function convertKelvinToAnotherUnit(convertTo, value) {
  let temperature = 0;
  switch(convertTo) {
    case 'F':
      temperature = (value - 273.15) * 9 / 5 + 32; 
      return temperature;
    case 'C':
      temperature = value - 273.15;
      return temperature;
    case 'K':
      return value;
    default:
      return NaN;
  }
}

function convert(from, convertTo, value) {
  let temperature = 0;
  switch (from) {
    case 'C':
      return convertCelciusToAnotherUnit(convertTo, value);
    case 'F':
      return convertFahrenheitToAnotherUnit(convertTo, value);
    case 'K':
      return convertKelvinToAnotherUnit(convertTo, value);
  }
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function getMessage(from, convertTo, expected, actual) {
  let message = "Temperature '" + from + "' to '" + convertTo + "' expected: ";
  message += expected + " and is ---> " + actual;

  return message;
}

function testConvert(from, convertTo, value, expected) {
  const actual = convert(from, convertTo, +value);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), getMessage(from, convertTo, expected, actual));
}

function tests() {
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'K', "0", 273.15);
  testConvert('C', 'C', 0, 0);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'F', -40, -40);
  testConvert('K', 'K', 100, 100);
  testConvert('K', 'k', 100, NaN);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
}

tests();