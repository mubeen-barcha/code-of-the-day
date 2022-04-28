// OOP
// Object Oriented programming
// Introduce in  ES6 VERISON

// Coding methodology /style/pattern
// .code more Modular and Reusable
// .well orgainzed code
// .easier to debug
// best for medium to large website projects

const books = {
  name: "book1",
  author: "john bhai",
  year: "2022",
  getsummary: function () {
    return `${this.name} is written by ${this.author} in ${this.year}`;
  },
};
console.log(books.getsummary());
console.log(Object.values(books));
console.log(Object.keys(books));
console.log(Object.entries(books));

// what is OOP?
// => object oriented programming is way of writing code that allows you to create different objects from a common object .The common object is usually called blueprint while the created objects are called instances. Each instance has properties that are not shared other properties.

// Why we use OOP?
// => it also provides easy ways to creating prototypes and organize related data. true OOP languages do not perform prototyping in the background just it take note of that

//              Benefits of OOP

// 1.Encapsulaion : Reduce complexity + increase reusability
// => Group related variable and function together this way we can reduce complexity

// 2.Abstraction : Reduce complexity + isolate impact of changes
// => we hide the unnecessary details and the complexity and the show the necessary details
// =>Exposing necessary features of a class without explaining much or details is done by Abstraction.

// 3.Inheritance: Eliminate redundant code
// =>

// 4.Polymorphism : Refactor ugly switch/case statement

// // OOP IN JAVASCRIPT CODE EXAMPLE

// function Person(name) {
//     this.name = name;
//     this.greeting = function() {
//       console.log('Hi! I\'m ' + this.name + '.');
//     };
//   }

//   class Beluga {
//     constructor(name, job, age, hobby) {
//       this.name = name;
//       this.job = job;
//       this.age = age;
//       this.hobby = hobby;
//     }
//   }

//   var beluga = new Beluga("Beluga", "Web Developer", 34, "Bowling")

//   // Expected output is Web Developer
//   console.log(beluga.job)

// here are some another example of oop
// factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }


// const circle = createCircle(1);


// Contructor function

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const another = new Circle(1)
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// Circle.call({}, 1)

// const another = new Circle(1)














































































// primitives are copied by their value
// objects are copied by their refercence




// example of oop


class student{
  constructor(name, age){
    this.studentname = name;
    this.studentage = age;
    console.log("constructor function");
  }

  hello(){
    console.log(`hello ${this.studentname}
    your age is ${this.studentage}`)
  }

  static staticmethod(){
    console.log("static method")
  }
}


let a = new student ("Sufiyana",26)
let b = new student ("Dj hunxai",22)


a.hello()
b.hello()
// not treat like a normal function 0r like a prototype
// a.staticmethod()  
// we call it like this 
student.staticmethod();