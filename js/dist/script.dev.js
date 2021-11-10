"use strict"; ////////////// 5. Переменные и строгий режим

/**
a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;


number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log (obj);

console.log(name);
    var name = 'Ivan';

{
    var result = 50;
}

// console.log(result);
*/
////////////////// 6. Классификация типов данных в JavaScript

/*
let number = 4.6;

console.log(4/0);
console.log('string' * 9);

const persone = 'Alex';

const bool = true;


// console.log(something);

const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};

// console.log(obj ['name']);
console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp'];
console.log(arr[1]); */
///////////// 7. Простое общение с пользователем
// alert('Hello');
// const result = confirm('Are you here?');
// console.log(result);
// const answer = prompt('Вам есть 18?', 'yes');
// console.log(typeof(answer));
// const answers = [];
// answers[0] = prompt('Как вашк имя?', '');
// answers[1] = prompt('Как вашf фамилия?', '');
// answers[2] = prompt('Как ваше отчество?', '');
// document.write(answers);
// console.log(typeof(answers));
/////////////////////////////////////8. Интерполяция (ES6)
// const category = 'toys';
// console.log(`htttps://someurl.com/${category}/5`)
// const user = 'Ivan';
// alert(`Привет, ${user}`);
////////////////////////////////////// 9. Операторы в JS

var incr = 10,
    decr = 10;
incr++; // постиксная  
// ОПЕРАТОР ИНКРЕМЕНТА

--decr; // префиксная 
// ОПЕРАТОР ДЕКРЕМЕНТА

console.log(incr);
console.log(decr);
console.log(2 + 2 * 2 === 8);
var isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);