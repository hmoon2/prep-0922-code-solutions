function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', sum); // the log method of the console object is being called
// with two arguments
// the string "addTwoNumbers Exercise:"
// and the value of the variable sum

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var mins = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise:', mins); // the log method of the console object is being called
// with two arguments
// the string "convertHoursToMinutes Exercise:"
// and the value of the variable mins

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var name = getGreeting('World');

console.log('getGreeting Exercise:', name); // the log method of the console object is being called
// with two arguments
// the string "getGreeting Exercise:"
// and the value of the variable name

function addAndMultiplyBy5(num1, num2) {
  return [num1 + num2] * 5;
}

var result = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise:', result); // the log method of the console object is being called
// with two arguments
// the string "addAndMultiplyBy5 Exercise:"
// and the value of the variable result

function multiplyAndDivideBy5(num1, num2) {
  return [num1 * num2] / 5;
}

var answer = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise:', answer); // the log method of the console object is being called
// with two arguments
// the string "multiplyAndDivideBy5 Exercise:"
// and the value of the variable answer

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var outcome = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise:', outcome); // the log method of the console object is being called
// with two arguments
// the string "subtractTwoNumbers Exercise:"
// and the value of the variable outcome

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);

console.log('getCircleCircumference Exercise:', circumference); // the log of the console object is being called
// with two arguments
// the string "getCircleCircumference Exercise:"
// and the value of the variable circumference

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');

console.log('getFullName Exercise:', fullName); // the log method of the console object will be called
// with two arguments
// the string "getFullName Exercise:"
// and the value of the variable fullName

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);

console.log('cube Exercise:', cubeResult); // the log method of the console object is being called
// with two arguments
// the string "cube Exercise:"
// and the value of the variable cubeResult
