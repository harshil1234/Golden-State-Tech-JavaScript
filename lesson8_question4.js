var objParent = { mother: "Jill", father: "Bob" };
var objChildFirst = { name: "Greg", age:2 };
var objChildSecond = { name: "Monica", age:5 };

//ES2015 method
objChildFirst.__proto__ = objParent;
console.log(objChildFirst.father);
console.log(objChildFirst.mother);
objChildSecond.__proto__ = objParent;
console.log(objChildSecond.father);
console.log(objChildSecond.mother);
//Older JS method
Object.assign(objChildFirst, objParent);
console.log(objChildFirst);
Object.assign(objChildSecond, objParent);
console.log(objChildSecond);