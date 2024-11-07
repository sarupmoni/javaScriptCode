const format = 'dd-mm-yyyy';
const date = '28-02-2001';

// // Validate the given date against the format string

// // START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

function getDay(format, date) {
  switch (format) {
    case 'dd-mm-yyyy':
      return +(date[0] + date[1]);
    case 'mm-dd-yyyy':
      return +(date[3] + date[4]);
    case 'yyyy-mm-dd':
      return +(date[8] + date[9]);
  }
}

function getMonth(format, date) {
  switch (format) {
    case 'dd-mm-yyyy':
      return +(date[3] + date[4]);
    case 'mm-dd-yyyy':
      return +(date[0] + date[1]);
    case 'yyyy-mm-dd':
      return +(date[5] + date[6]);
  }
}

function getYear(format, date) {
  switch (format) {
    case 'dd-mm-yyyy':
      return +(date[6] + date[7] + date[8] + date[9]);
    case 'mm-dd-yyyy':
      return +(date[6] + date[7] + date[8] + date[9]);
    case 'yyyy-mm-dd':
      return +(date[0] + date[1] + date[2] + date[3]);
  }
}

function display(format, date) {
  console.log("Day ", getDay(format, date));
  console.log("Month ", getMonth(format, date));
  console.log("Year ", getYear(format, date));
}

display(format, date);

function monthWith31Days(month) {
  switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    return true;
  }
  return false;
}

function monthWith30Days(month) {
  switch(month) {
    case 4:
    case 6:
    case 9:
    case 11:
    return true;  
  }
  return false;
}

function getOutputValid() {
  console.log("Valid");
}

function getOutputInvalid() {
  console.log("Invalid");
}

if (format.length === date.length) {
  
  const year = getYear(format, date);
  const day = getDay(format, date);
  const month = getMonth(format, date);
  const dayLessThan29 = day > 0 && day < 29;
  const dayLessThan30 = day > 0 && day < 30;
  const dayLessThan31 = day > 0 && day < 31;
  const dayLessThan32 = day > 0 && day < 32;
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const check1 = isLeapYear && month === 2 && dayLessThan30;
  const check2 = month === 2 && dayLessThan29;
  const check3 = monthWith31Days(month) && dayLessThan32;
  const check4 = monthWith30Days(month) && dayLessThan31;
  const ifAnyCheckPass = check1 || check2 || check3 || check4;

  ifAnyCheckPass ? getOutputValid() : getOutputInvalid();

} else {
  getOutputInvalid();
}