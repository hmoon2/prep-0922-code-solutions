function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var mins = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise:', mins);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var name = getGreeting('World');

console.log('getGreeting Exercise:', name);

function addAndMultiplyBy5(num1, num2) {
  return [num1 + num2] * 5;
}

var result = addAndMultiplyBy5(10, 5);

console.log('addAndMultiplyBy5 Exercise:', result);

function multiplyAndDivideBy5(num1, num2) {
  return [num1 * num2] / 5;
}

var answer = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise:', answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var outcome = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise:', outcome);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);

console.log('getCircleCircumference Exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');

console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubeResult = cube(5);

console.log('cube Exercise:', cubeResult);
