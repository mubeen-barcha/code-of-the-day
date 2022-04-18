
// Callbacks
// when you nest a function inside
//  another function as an argument, that's called a Callback.

// let stocks = {
//   Fruits: ["apple", "grapes", "banana"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   topplings: ["chocolate", "peanuts"],
// };

// // console.log(stocks.Fruits[2])
// //   CallBack hell
// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log(" the fruits has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {
//             console.log(` ice cream was placed on ${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.topplings[0]} was added as topplings`);

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);
