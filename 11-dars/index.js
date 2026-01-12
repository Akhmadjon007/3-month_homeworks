"use strict";

// // // Amaliy /////////////////////////////
// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// function findUniqueWords(arr) {
//     const result = [];

//     arr.forEach((v) => {
//         if (arr.filter((val) => val === v).length === 1) result.push(v);
//     });

//     return result;
// }

// console.log(
//     findUniqueWords(["olma", "anjir", "orik", "anjir", "uzum", "olma"])
// );

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

// function findLongestWord(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > result.length) result = arr[i];
//     }
//     return result;
// }

// console.log(
//     findLongestWord(["olma", "anjir", "orik", "anjir", "uzum", "olma", "shaftoli"])
// );

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// function reverseNumbers(str) {
//     const arr = str.split("");
//     const numsArr = arr.filter((v) => !isNaN(v) && v !== " ").reverse();

//     for (let i = 0; i < arr.length; i++) {
//         if (!isNaN(arr[i]) && arr[i] !== " ") {
//             arr.splice(i, 1, numsArr.shift());
//         }
//     }

//     return arr.join("");
// }

// console.log(reverseNumbers("str3 bazi 7s0a2"));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// function uniqurValues(arr1, arr2) {
//     const result = [];

//     arr1.forEach((v) => {
//         if (arr2.includes(v)) result.push(v);
//     });

//     return result;
// }

// console.log(uniqurValues([1, 45, 6, 3, 7, 5, 8], [4, 5, 9, 6, 77, 2]));

// // 5-masala ////////////////////////////////////////////////////////////////////////////////

// function formatPhoneNumber(arr) {
//     let result = "";
//     let str = "";

//     arr.forEach((v) => {
//         if (str.length < 3) {
//             str += v;
//         } else if (!result) {
//             result += "(" + str + ") ";
//             str = "" + v;
//         } else if (str.length > 3) {
//             result += v;
//         } else {
//             result += str + "-" + v;
//             str += v;
//         }
//     });

//     return result;
// }

// function formatPhoneNumberPro(arr) {
//     let result = "";
//     let str = "";
//     for (const v of arr) {
//         if (str.length < 3) {
//             str += v;
//         } else if (!result) {
//             result += "(" + str + ") ";
//             str = "" + v;
//         } else {
//             result += str + "-";
//             str = "" + v;
//         }
//     }

//     // oxirida qolgan str ni qo'shish va "-" bilan tugashini oldini olish
//     if (str) {
//         if (str.length < 3) {
//             result = result.slice(0, -1);
//             result += str;
//         } else {
//             result += str;
//         }
//     } else {
//         result = result.slice(0, -1);
//     }

//     return result;
// }

// // console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(formatPhoneNumberPro([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(formatPhoneNumberPro([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 7]));
// console.log(formatPhoneNumberPro([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 7, 4, 3]));
