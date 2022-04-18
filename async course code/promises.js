// we need to understand four more things first ->


// Relationship between time and work
// Promise chaining
// Error handling
// The finally handler



// structure of promise

//         Promise

//        Pending

// Resolve         Reject

// .then
//                .catch
// .then

//         finally


// // code structure 
// function kitchen(){

//   return new Promise ((resolve, reject)=>{
//     if(true){
//        resolve("promise is fulfilled")
//     }

//     else{
//         reject("error caught here")
//     }
//   })
// }

// kitchen()  // run the code
// .then()    // next step
// .then()    // next step
// .catch()   // error caught here
// .finally() // end of the promise [optional]


// understanding things by code

let stocks = {
  Fruits: ["apple", "grapes", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topplings: ["chocolate", "peanuts"],
};

// let is_shop_open = true;
let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};


order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    
    
    return order(0000, () => console.log("production has started") )

})

.then(() => {
    return order(2000, () => console.log("the fruit was chopped"))
})

.then(() =>{
    return order (1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)
    })
})

.then( ()=>{
    return order(1000, ()=>console.log("start the machine"))
})

.then( ()=>{
    return order(2000, ()=>{
        console.log(`ice cream placed on ${stocks.holder[0]}`)
    })
})

.then( ()=>{
    return order(3000, ()=>{
        console.log(`${stocks.topplings[0]} was selected`)
    })
})


.then( ()=>{
    return order(1000, ()=> console.log("ice cream was served"))
})


.catch(() => {
    console.log("customer left")
})

.finally(() => {
    console.log("day ended, shop is closed")
})