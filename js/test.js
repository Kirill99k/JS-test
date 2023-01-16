// Task 1
//НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"//
// const name = 'Kyrylo';
// const age = 23;
// const hobby = 'JavaScript';
// const message = `Good day, my name is ${name}, I am ${age} years old, learning ${hobby}`;

// console.log(message);

// Task 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"
// const userName = prompt('Your name');
// const mail = prompt('Your mail');
// const phone = prompt('Your phone');
// const massage = `User ${userName} uses ${mail} email and ${phone} phone`;

// console.log(massage);

// Task 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ .
// ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ
// const laptop = Number(prompt('laptop price'));
// const phone = Number(prompt('phone price'));
// const TV = Number(prompt('TV price'));
// const totalPrice = laptop + phone + TV;

// console.log(totalPrice);


// Task 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const whatMonth = Number(prompt('How many months are in a year?'));

// if (whatMonth === 12) {
//     console.log('True');
// } else {
//     console.log('False');
// }

// Task 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ


// const yourNumber = Number(prompt('Enter your number'));

// if (yourNumber % 2 === 0) {
//     console.log('Integer');
// } else {
//     console.log('Not an integer');
// }

// Ternary operator
// const number = yourNumber % 2 === 0 ? 'Integer' : 'Not an integer';
// console.log(number);

// Task 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt('The month of birth is a number'));

// if (month === 12 || month === 1 || month === 2) {
//     console.log('Winter');
// } else if (month >= 3 && month <= 5) {
//     console.log('Spring');
// } else if (month >= 6 && month <= 8) {
//     console.log('Summer');
// } else if (month >= 9 && month <= 11) {
//     console.log('Autumn');
// } else {
//     console.log('Error');
// }

// switch (month) {
//     case  1:
//         console.log('January');
//         break;
    
//     case  2:
//         console.log('February');
//         break;
    
//     case  3:
//         console.log('March');
//         break;
    
//     case  4:
//         console.log('April');
//         break;
    
//     case  5:
//         console.log('May');
//         break;
    
//     case  6:
//         console.log('June');
//         break;
    
//     case  7:
//         console.log('July');
//         break;
    
//     case  8:
//         console.log('August');
//         break;
    
//     case  9:
//         console.log('September');
//         break;
    
//     case  10:
//         console.log('October');
//         break;
    
//     case  11:
//         console.log('November');
//         break;
    
//     case  12:
//         console.log('December');
//         break;
    
//     default:
//         console.log('Error');
//         break;
// }

//Task 7:
//НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІТ І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ, ЩО НЕ ВІРНИЙ ЛОГІН

// const email = 'kirill99k@gmail.com';
// const myPass = 'pass123';
// const login = prompt('Enter your email');
// const password = prompt('Enter your password');

// if (login === email && password === myPass) {
//     alert('Welcome');
// } else {
//     alert('Enter correct credentials');
// }

// const loginCreds = login === email && password === myPass ? alert('Welcome') : alert('Enter correct credentials');

//Task 8:

// const period = prompt('Service subscription period').toLowerCase();

// if (period === 'day') {
//     console.log('Price: 1.99');
// } else if (period === 'sunday') {
//     console.log('Price: 5.99');
// } else if (period === 'month') {
//     console.log('Price: 10.99');
// } else if (period === 'year') {
//     console.log('Price: 100.99');
// } else {
//     console.log('Incorrect data');
// }

// switch (period) {
//     case 'day':
//         console.log('Price: 1.99');
//         break;
    
//     case 'sunday':
//         console.log('Price: 5.99');
//         break;
    
//     case 'month':
//         console.log('Price: 10.99');
//         break;
    
//     case 'year':
//         console.log('Price: 100.99');
//         break;

//     default:
//         console.log('Incorrect data');
//         break;
// }

// Task 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10
// const min = 10;
// const max = 100;

// for (let iteration = min; iteration <= max; iteration += 1) {
//     if (iteration % 10 === 0) {
//         console.log(iteration);
//     }
// }



// Task 10 
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"
// const whatName = prompt('What first name?');?

