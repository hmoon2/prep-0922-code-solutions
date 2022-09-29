const person = {
  firstName: 'Will',
  lastName: 'Bryant',
  hobby: 'fishing'
};
console.log(person);
const fullName = 'The person\'s name is ' + person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'animator';
console.log("The person's current job is: " + person.job);
person.previousJob = 'teacher';
console.log("The person's previous job is: " + person.previousJob);
console.log(person);
