//  Things to know deeply

//  Data types

//  two type
//  primitive Data types and non primitive(Reference types)

// 1 primitive Data types
// .string
// .Number
// .Boolean
// .Null
// .Undefined
// .Symbols(ES6)

// 2 non primitive(Reference types)
// .Arrays (typeof object)
// .Object literals
// .functions
// .Dates
// .Anything else...

// Array and Array methods

// const numbers = [33, 45, 43, 44, 55, 60];
// const numbers2 = new Array(22, 65, 73, 14, 35);
// const fruit = ["Apple", "Banana", "Orange", "pear"];
// const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // get array length
// val = numbers.length;

// // get single value
// val = numbers[3];
// val = numbers[0];
// // insert into array
// numbers[2] = 100;
// // to find the index of value
// val = numbers.indexOf(100);

// // //  Mutating Arrays
// // // add on to end
// // numbers.push(250);
// // // add on the front
// // numbers.unshift(22);
// // // take off from end
// // numbers.pop();
// // // take off from front
// // numbers.shift();
// // // splice values
// // numbers.splice(1,1);
// // // Reverse
// // numbers.reverse();

// // concatenate array
// val = numbers.concat(numbers2);

// // sorting arrays

// val = fruit.sort();
// val = numbers.sort();

// // use the "compare function"

// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort

// val = numbers.sort(function (x, y) {
//   return y - x ;
// });

// // find
// function under50(num) {
//     return num > 50;

// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

//  General loops
// loop is an instruction that repeats until a specific conditions is reached.

// for loop
//  for loop is use to  iterate
// for (let i = 0; i < 10; i++) {
//     // if (i === 2) {
//         //     console.log("2 is my is fvrt number")
//         //   continue;
//         // }
//         if (i === 5) {
//             console.log("2 is my is fvrt number")
//             break;
//         }
//         console.log('Number'+ i)
// }

// WHILE LOOP
// let i = 0;
//  while (i < 10) {
//      console.log('Number' + i);
//      i++;
//  }

//  DO WHILE LOOP
// alway going to run once no matter
// let i = 0;

// do {
//   console.log("Number" + i);
//   i++;
// } while ((i < 10));

// LOOP THROUGH ARRAY

// const cars = ["ford", "chevy", "honda", "toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// I always suggest forEach to loop through an array
// FOREACH
// cars.forEach(function (car, index, array) {
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP THROUGH ARRAY
// const users = [
//   { id: 1, name: "john" },
//   { id: 2, name: "sost" },
//   { id: 3, name: "sarah" },
//   { id: 4, name: "alee" },
// ];
 
// returning the id in array by Map methods
// const ids = users.map(function (users) {
//   return users.id;
// });
// returning the name in array  by Map methods
// const names = users.map(function (users) {
//   return users.name
// });
// console.log(names)

// console.log(ids);



// filter

// const myArray = [
//     { id: 1, name: "Mark" },
//     { id: 2, name: "Sam" },
//     { id: 3, name: "Sandy" },
//     { id: 4, name: "Mark" },
//   ]
  
//   let num = myArray.filter(element => element.name === "Mark")
//   //-------> Output : 0:{id: 1, name: "Mark"},
//   //                  1:{id: 4, name: "Mark"}
  
// console.log(num);

// let students = [
//     {
//         firstName: 'Johnny',
//         lastName: 'Lee',
//         age: 20,
//     },

//     {
//         firstName: 'Anna',
//         lastName: 'Zax',
//         age: 19,

//     },

//     {
//         firstName: 'Zion',
//         lastName: 'Sanches',
//         age: 22,

//     }
// ];

// let sum = students.sort((a, b) => {
//     return a.age - b.age;
// });
// console.log(sum)



//students.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });






// const arr = [1,2,3,4]

// let result = arr.map(()=>{
//     return arr.length
// })
// console.log(result)

// // reduce method
// var array = [36, 25, 6, 15];


// let sum3 = array.reduce((acc, val)=>{
//     return acc + val
// })
// console.log(sum3)

// let sum1 = array.reduce(function(accumulator, currentValue) {
//   return  accumulator + currentValue;
// }, 0); // 36 + 25 + 6 + 15 = 82
//  console.log(sum1)

//  let numbers = [1, 2, 3];
// let sum = numbers.reduce(function (previousValue, currentValue) {
//     return  previousValue + currentValue;
// });

// console.log(sum);


// FOR IN LOOP
// const user = {
//   firstName: "john",
//   lastName: "Doe",
//   age: 40
// }

// for (let x in user) {
//     console.log(`${x} : ${user[x]}`)
// }

// const ob = {
//     firstName:'naveed',
//     second_name:"asdf",
//    'second nmae' : "jgkk"
// }
// for ( let x in ob){
//     console.log(x , ":", ob[x])
// }
//  Array of objects

// const arrayOfObjects = [
//   { names: "Ansar", age: 26, location: "rahimabad" },
//   { names: "mubeen", age: 22, location: "rahimabad" },
//   { names: "jahangeer", age: 24, location: "oshikhandass" },
//   { names: "muhabat khan", age: 23, location: "sost" },
//   { names: "danish", age: 21, location: "kareemabad" },
//   { names: "nouman", age: 25, location: "gojal" },
//   { names: "sajid", age: 20, location: "gilgit" },
//   { names: "khifayat", age: 26, location: "nager" },
//   { names: "faizan", age: 20, location: "aliabad" },
// ];
// // using for of loop on array of objects
//   for (let element of arrayOfObjects) {
//   console.log([element]);
//   }

// //using for loop on array of objects
//   for (item= 0; item < arrayOfObjects.length; item++) {

//      console.log(arrayOfObjects[item].names+'_______'+arrayOfObjects[item].age +' _________'+arrayOfObjects[item].location + '<br>')
// }

//using for in loop on array of objects
// let text = "";
// for (let x in arrayOfObjects) {
//   text += arrayOfObjects[x] + "";
//   console.log(x, arrayOfObjects[x] );
// }

// using for each loop on array of objects

// arrayOfObjects.forEach((arrayOfObjects) => {
//   for (let key in arrayOfObjects) {
//     console.log(`${key}  : ${arrayOfObjects[key]}`);
//   }
// });

//  Event Bubbling


//  document.querySelector("#grandParent")
//    .addEventListener('click', () => {
//   console.log("Grandparent has clicked!")
//    }) ;
//  document.querySelector("#parent")
//    .addEventListener('click', () => {
//   console.log("parent has clicked!")
//    }) ;
//  document.querySelector("#child")
//    .addEventListener('click', () => {
//   console.log("child has clicked!")
//    }) ;

// stop propagation in Event Bubbling

// document.querySelector("#grandParent")
// .addEventListener('click', () => {
//     console.log("Grandparent has clicked!")
//     }, false) ;
//     document.querySelector("#parent")
//     .addEventListener('click', (e) => {
//     console.log("parent has clicked!")
//     // e.stopPropagation();
//     e.preventDefault;
//     }, false) ;
//     document.querySelector("#child")
//     .addEventListener('click', () => {
//     console.log("child has clicked!")
//     }, false) ;

// Event capturing



// document.querySelector("#grandParent")
// .addEventListener('click', () => {
// console.log("Grandparent has clicked!")
// }, true) ;
// document.querySelector("#parent")
// .addEventListener('click', () => {
// console.log("parent has clicked!")
// }, true) ;
// document.querySelector("#child")
// .addEventListener('click', () => {
// console.log("child has clicked!")
// }, true) ;


// stop propagation in Event capturing or trickling down

// document.querySelector("#grandParent")
// .addEventListener('click', () => {
// console.log("Grandparent has clicked!")
// }, true) ;
// document.querySelector("#parent")
// .addEventListener('click', (e) => {
// console.log("parent has clicked!")
// e.stopPropagation();
// }, true) ;
// document.querySelector("#child")
// .addEventListener('click', () => {
// console.log("child has clicked!")
// }, true) ;

//  Event delegation
// less code limitions not to use stop propagation
// document.querySelector("#form").addEventListener('keyup', (e) => {
//     console.log(e);
//     if (e.target.dataset.uppercase != undefined) {
//         e.target.value = e.target.value.toUpperCase();
//     }
// })

//  OOP

//  OOP difference in ES5 and ES6

//  Major differcence between ES5 and ES6

//  what are Generators

//  fetch api
// fetch('http://example.com/songs')
	// .then(response => response.json())
	// .then(data => console.log(data))
	// .catch(err => console.error(err));

    //Obj of data to send in future like a dummyDb
// const data = { username: 'example' };

//POST request with body equal on data in JSON format
// fetch('https://example.com/profile', {
//   method: 'POST',
//   headers: {
    // 'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })




// another example
// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
    // 'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

//  aysnc await

// console.log('here')


// RoadMap
// 1. HTML
// 2.CSS
// 3.JAVASCRIPT
// 4.FRAMEWORKS AND LIBRARIES (ANGULAR) (REACT.JS) (VUE.JS) 
// (NEXT.JS) (AXIOS) (RXJS)
// 5.COMPONENT/LIBRARIES.JSX (SEMANTIC UI)
// 6.SOFTWARE/DEV.TOOLS (chrome dev.toolS)
// 7.DOCKER/DEPLOY.STATUS (Github page) (vercel) (Netlify)
// 8.Bonus/learning.path (typescript)















// Array methods
// map
// applay fuction on each elemet of first existing  array and return new arry from the existing one
//  syntax
// var new_array = array.map(function callback(element, index, Array){
//   // return the value for new array
// })
// simple example
// let array = [1, 2, 3, 4, 5, ]
// let some = array.map(num => num * 3);
// console.log(array)
// // returned  new array
// console.log(some);
//  Array of object example
// const student = [
//   { name: "danish", age : 55, gender: "male"},
//   { name :"barch", age : 77, gender: "shemale"},
//   { name : "Ansar", age : 44},
//   { name : "sost", age : 17},
// ];
// const result = student.map(num =>({value: num.name, text: num.age, def:num.gender}));
// console.log(result);
// filter
// apllied conditional statment against each element in array
// if the condtion is true it return the value and if it os false did,nt reurn value
// Syntax
// var new_array = arr.filter(function callback (element, index, array){
//   // than it return true or false
// })
// simple example
// const number = [1, 2, 3, 4, 5,];
// const even = number.filter(num=> num%2===0)
// console.log(number)
// // filter
// console.log(even);
// arrays of object exmple
// const student = [
//     { name: "danish", age : 55, gender: "male"},
//     { name :"barch", age : 77, gender: "shemale"},
//     { name : "Ansar", age : 44, gender: "shemale"},
//     { name : "sost", age : 17, gender: "shemale"},
//   ];
//   const gojo = student.filter((a)=>{if(a.gender=='shemale'){return a}})
//   console.log(gojo);
//   let arr=[{id:1,title:'A', status:true}, {id:3,title:'B',status:true}, {id:2, title:'xys', status:true}];
// //find where title=B
// let x = arr.filter((a)=>{if(a.title=='B'){return a}});
// console.log(x)
// reduce
// reduce an arry value down to just one value. to get the value . it run reducer function on each element.
// simple example
// const numer = [1,2,3,4]
// const simple = numer.reduce((sum,num) => sum+num)
// console.log(simple);
// // const even = numer.reduce(function (result , item) {
// //   return result + item
// // })
// console.log(even)
// let months = [ {id :1 },{id :2 },{id :3 },]
//  let monthsbyid = months.reduce((byId, month) => byId[month.id] = month ,{});
//  console.log(monthsbyid);
// sort
// sorts the  element in an array and return the sorted array.
// syntax \
// Arr.sort([compareFunction])
// rearranging  the numbers
// let numbers = [0, 1, 2, 40, 20, 34,];
// numbers.sort();
// console.log(numbers);
// example
// let students = [
//   {firstName : "danish", lastName : "jhon", age : 66},
//   {firstName : "sost ", lastName : "janu", age : 88},
//   {firstName : "mubeen jan", lastName : "jander", age :99}
// ];
// // const ggg= students.sort((a,b)=>{return a.age - b.age})
// // console.log(ggg);
// students.forEach((e)=>{
//   console.log(`${e.firstName} ${e.lastName} ${e.age}`)
// })

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
