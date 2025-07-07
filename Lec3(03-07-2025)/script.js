// let cart = ["shoes", "shirt", "wallets"];

// function orderDetail(cart) {
//   // 1. Total no of products
//   // 2. Total Amount of Products nos * 1000
//   const totalProducts = cart.length;
//   const totalAmount = totalProducts * 1000;
//   return {
//     totalProducts,
//     totalAmount,
//     products: cart,
//   };
// }

// function orderSummary(cart) {
//   // total price and total product
//   // then generated orderId
//   const { totalProducts, totalAmount, products } = orderDetail(cart);
//   const orderId = "ORD" + Math.floor(Math.random() * 1000000);
//   return {
//     orderId,
//     totalProducts,
//     totalAmount,
//     products,
//   };
// }

// function paymentGateway(order) {
//   // orderId, product details and price .. Payment is successful
//   return {
//     ...order,
//     paymentStatus: "Payment Successful",
//   };
// }

// function successfulOrder(cart) {
//   // it will give all the details about the payment product name and everything
//   const summary = orderSummary(cart);
//   const payment = paymentGateway(summary);
//   return {
//     ...payment,
//     message: "Order placed successfully!",
//   };
// }

// const result = successfulOrder(cart);
// console.log(result);
// Array.prototype.myFilter = function (logic) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (logic(this[i])) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };
// // function isEven(num) {
// //   return num % 2 === 0;
// // }
// // function isOdd(num) {
// //   return num % 2 !== 0;
// // }
// function isPrime(num) { 
//     if(num<2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.myFilter(isEven)); 

// reduce function
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// );
// console.log(sumWithInitial);
// const sumofAll = array1.reduce(function(acc, curr){
//     acc =  acc + curr;
//     return acc;
// },0);
// console.log(sumofAll);





