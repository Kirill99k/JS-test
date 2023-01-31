// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));




// «перебрати»  поелементно

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


// Напиши функцію, яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
 
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));



// Напиши функцію, яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.



// function findLongestWord(string) {
//   let stringSplit = string.split(' ');
//   let longestWord = "";

//   for (let word of stringSplit) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// Напиши функцію slugify(string) яка отримує рядок і повертає URL-slug
// Рядок складається тільки з літер і пробілів
  

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };



// Доповни код функції(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
// for(let i = min; i <= max; i++) {
//   numbers.push(i);
//   }
  
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14,17));
// console.log(createArrayOfNumbers(29,34));



// Напиши функцію, яка отримує два масиви довільної довжини в параметри array1 і array2,
// і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
// const uniqueElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       uniqueElements.push(element);
//     }
//   }
//   return uniqueElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log (getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log (getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log (getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));


// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
  
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//      evenNumbers.push(i);
//   }
 
// }
//   return numbers;
// }