"use strict";

// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// function mostFounded(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (
//             arr.filter((v) => v === arr[i]).length >
//             arr.filter((v) => v === result).length
//         )
//             result = arr[i];
//     }
//     return {element: result, count: arr.filter((v) => v === result).length};
// }

// console.log(mostFounded([1, 2, 4, 9, 5, 7, 5, 6, 2, 1, 4, 5]));

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

// const countEvens = (arr) => arr.filter((v) => v % 2 === 0 && v !== 0).length;

// console.log(countEvens([1, 2, 4, 9, 5, 7, 5, 6, 2, 1, 4, 5, 0]));

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// const onlyOnce = (arr) => arr.filter((v) => arr.filter((val) => val === v).length === 1);

// console.log(onlyOnce([1, 2, 4, 9, 5, 2, 1, 4, 5, 0]));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// const reverseWords = (str) => str.split(" ").reverse().join(" ");

// console.log(reverseWords(`so'zlarni teskari qiladi`));

// // 5-masala ////////////////////////////////////////////////////////////////////////////////

// const isOnlyDigit = (str) => !isNaN(str) && str.replaceAll(" ", "") !== "";

// console.log(isOnlyDigit("84551"));
// console.log(isOnlyDigit("845a51"));
// console.log(isOnlyDigit(" "));

// // 6-masala ////////////////////////////////////////////////////////////////////////////////

// const eMoreThanTwo = (arr) => arr.filter(v=>v.split('').filter(val=>val.toLowerCase() === 'e').length>1)

// console.log(eMoreThanTwo(["elephant", "apple", "tree", "cheese", "banana"]));

// // 7-masala ////////////////////////////////////////////////////////////////////////////////

// const alphabeticWords = arr => arr.filter(v => v.split('').sort().join('')===v)

// console.log(alphabeticWords(["abs", "dog", "xyz", "apple", 'app']));

// // 8-masala ////////////////////////////////////////////////////////////////////////////////

// function withoutSplit(str, seperator = "") {
//     const result = [];
//     let word = "";

//     for (let i = 0; i < str.length; i++) {
//         word += str[i];
//         if (str[i] === seperator || !seperator.length) {
//             if (word) result.push(word);
//             word = "";
//         }
//     }

//     if (word) result.push(word);

//     return result;
// }

// function withoutJoin(arr, seperator = ", ") {
//     let result = "";
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//         if (i !== arr.length - 1) result += seperator;
//     }
//     return result;
// }

// console.log(withoutSplit("stringni arrayga  aylantiradi", " "));
// console.log(withoutJoin(["arrayni", "stringga", "aylantiradi"], " "));

// // 9-masala ////////////////////////////////////////////////////////////////////////////////

// function measureDepth(arr) {
//     let count = 0;
//     let deapest = 0;

//     if (Array.isArray(arr)) {
//         count++;
//         for (const v of arr) {
//             let vDepth = measureDepth(v);
//             if (vDepth > deapest) deapest = vDepth;
//             // yoki
//             // count += Math.max(...arr.map(measureDepth));
//         }
//         count += deapest;
//     }

//     return count;
// }

// console.log(measureDepth([[[[[[[[]]], [[[[[[]]]]]]]]]], [[[]]]]));

// // 10-masala ///////////////////////////////////////////////////////////////////////////////

// function sumDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }

//     return sum;
// }

// console.log(sumDigits(4512));
