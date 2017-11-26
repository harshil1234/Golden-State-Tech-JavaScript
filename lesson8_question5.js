/*
5. Constructor functions
- Create a constructor function for "Person".
- Pass parameters: first, last, age
- Use "this" keyword in your constructor object to set parameter values
- Extend the Person object prototype with a new fullName function
- Add two instance of the Person object (myMother, myFather)
- Console.log their age and full name.
*/

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName
};
 
var myFather = new Person("John", "Doe", 50);
var myMother = new Person("Sally", "Rally", 48);
console.log("My mother's name is "+myMother.fullName()+ " and her age is "+myMother.age);
console.log("My father's name is "+myFather.fullName()+ " and his age is "+myFather.age);