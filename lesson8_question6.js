/*6.  
BONUS:
We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How to fix it?
*/

let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
    stomach: [],
  __proto__: hamster
};

let lazy = {
    stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

/* This one also has it, why? fix please, 
Answer: because stomach list was set at hamster object, to fix it needs to be set at indiviual object level
*/
alert( lazy.stomach );