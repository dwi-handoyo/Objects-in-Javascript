
// #7 Object by Function Expression 

const Student = function(name, age){
 this.name = name;
 this.age = age;
 this.sayHello = function(){
  return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
 }
}

let john = new Student('John Smith', 25);

console.log(john.sayHello()); // output: "Hello, my name is John Smith, I am 25 years old."

// Object with arrow function

const Car = function(brand, speed){
 this.brand = brand;
 this.speed = speed;
 this.distance = (hour) => {
  return `After ${hour} hours, the ${this.brand} position is ${this.speed * hour} km away.`
 }
}

let honda = new Car('Honda', 120);

console.log(honda.distance(2)); // output: "After 2, the Honda position is 240 km away."


