const o = {};

o.a=1; 
console.log(o);

var str1 = '';
var str2= 'Hello';

var str = 'Hello';
str = 'world';

// 유사배열객체
var str = 'string'

console.log(str[0]);
console.log(str.length);
console.log(str.toUpperCase);

var str = 'string';

str[0] = 'S'; // 안됨
console.log(str);


var score = 80;
var copy = score ; //값에 의한 전달

console.log(score);
console.log(copy);

score = 100;

console.log(score);
console.log(copy);

var score = 80;
var copy  = score;

console.log(score, copy);
console.log(score === copy); // 서로 다른 메모리공간에 저장된 별개의 값 ..... 허걱 

score = 100;

console.log(score, copy);
console.log(score === copy);

var x = 10;

var person = {
    name: 'Lee'
}

person.name = 'Kim';
person.address = 'Seoul';


//얕복 깊복
const o = { x: {y:1}};

const cl = { ...o};

console.log(c1 === o);
console.log(c1.x === o.x);

// 깊은 복사
// const _ = require('lodash');
// const c2 = _.cloneDeep(o);
// console.log(c2 === o);
// console.log(c2.x === o.x);

const v = 1;
const c1 =v;
console.log(c1 === v);

const o = {x:1};

const c2 = o;
console.log( c2 === o);

