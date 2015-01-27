//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = [];
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

  var Person = function(name, age, height, gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.gender = gender;
  };


//Create a animal array and a person array.

  //code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

  //code here

var dog = new Animal("dog", "spot", 4, "black", "dog food");
var cat = new Animal("cat", "princess", 4, "white", ["cat food", "gross stuff"]);

animal.push(dog, cat);

//Create two instances of person and push those into your person array.

  //code here

var blake = new Person("Blake", 32, "5ft 7in", "M");
var emily = new Person("Emily", 30, "5ft 3in", "F");

person.push(blake, emily);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

  var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = [];
  this.eat = function() {
    console.log (Animal.name + " ate " + food);
  }
}


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/