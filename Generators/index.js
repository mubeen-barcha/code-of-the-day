// function* simpleGenerator() {
//     yield 1
//     yield 2
//     yield 3
// }

// const generatorObject = simpleGenerator()
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// const generatorObject2 = simpleGenerator()
// console.log(generatorObject.next())
// console.log(generatorObject.next())
// const generatorObject = simpleGenerator()
// console.log(generatorObject)

// const obj = generatorObject.next()
// console.log(obj)

// iterator and array work with generator

// function* generator(array) {
//     for (let i = 0; i < array.length; i++) {
//         yield array[i];

//     }
// }

// const generatorObject12 = generator([1,2,5])
// console.log(generatorObject12.next());
// console.log(generatorObject12.next());
// console.log(generatorObject12.next());
// console.log(generatorObject12.next());

// function* generatorId() {
//   let id = 1;

//   while (true) {
//     const increment = yield id;
//     if (increment != null) {
//       id += increment;
//     } else {
//       id++;
//     }
//   }
// }

// const generatorObject = generatorId();
// console.log(generatorObject.next())
// console.log(generatorObject.throw(new Error("hi")))
// console.log(generatorObject.return(10))
// console.log(generatorObject.next())

// 
// function *generateit(){
// yield "No 1"
// yield "No 2"
// yield "No 3"
// }


// let g = generateit();

// // to print the value in yield
// console.log(g.next().value);
// console.log(g.next());
// // this is a method to not print the value
// g.next(); 
// console.log(g.next());


// loop in generator
// function *generateit(){
// yield "No 1"
// yield "No 2"
// yield "No 3"
// }


// let g = generateit();
// for (let value of g) {
//     console.log(value)
// }