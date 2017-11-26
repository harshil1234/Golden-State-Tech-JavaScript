//First Type of Object
var objCreation1 = {'type': "version1", "name": "aJsObj"};
console.log(objCreation1);
//remove property/key
delete objCreation1.name
console.log(objCreation1);
//Second Type of Object
var objCreation2 = Object.create(Object.prototype);
objCreation2.type = "version2";
objCreation2.name = "anotherJsObj";
console.log(objCreation2);
//remove property/key
delete objCreation2.name
console.log(objCreation2);
//Third Type of Object
var objCreation3 = new Object();
objCreation3.type = "version3";
objCreation3.name = "anotheranotherJsObj";
console.log(objCreation3);
//remove property/key
delete objCreation3.name
console.log(objCreation3);