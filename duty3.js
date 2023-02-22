// function printNumbers() {
//     for (let i = 1; i <= 10; i++) {
//       console.log(i);

//     }
//   }
  
// function name(params) {
//     let sum = "";
//     for (let i = 1; i <= params; i++) {
//         sum += /n/ + i;
//     }
//     return sum;
// }
   
 
// console.log(name(10));

// function sumArray(arr) {
//     let sum = [];
//     for (let i = 0; i < arr; i++) {
//       sum += arr(i).push;
//     }
//     return sum;
//   }
//   console.log(sumArray(10));


// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i + " * " + j + " = " + i*j );
//     }
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// let sum = 0;
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }
// for (let j = 0; j <= 10; j++) {
//     console.log(j);
// }



function simpleArraySum(ar) {
    let sum = 0;
    for  (i = 0; i < ar.length; i++){
        sum = sum + ar[i];
    }
    return sum;
}
console.log(simpleArraySum([1,2,3,4,10,11]));


// function sumArray(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//           sum += arr[i];
//         }
//         return sum;
// }
//  console.log(sumArray([10,5,4]));