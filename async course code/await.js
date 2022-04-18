// async await

// you need to understand two things in it
// .How to use the try and catch keywords
// .how to use the await keyword

// before async/await to make a promise we wrote this

// function order(){
//     return new Promise( (resolve, reject) =>{

//      // Write code here
//     } )
//  }

// Now using async/await we write one like this
// the magical keyword
// async function order() {
//     // Write code here
//  }

// Async/await in js -> try, catch
// when we're using async/await we use this format for try,catch
// Magical keyword
// async function kitchen(){

//     try{
//  // Let's create a fake problem
//        await abc;
//     }

//     catch(error){
//        console.log("abc does not exist", error)
//     }

//     finally{
//        console.log("Runs code anyways")
//     }
//  }

//  kitchen()  // run the code

// example to explain Async/Await

// async function order() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc doesn't exist", error);
//   } finally {
//     console.log("runs code anyways");
//   }
// }

// // its the chaining part ok
// order().then(() => {
//     console.log("fkefkf")
// })

let stocks = {
  Fruits: ["apple", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topplings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

//  