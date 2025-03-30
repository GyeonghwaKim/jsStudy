//스프레드는 이터러블만 가능
console.log(...[1,2,3]);
console.log(...'Hello'); //문자열도 이터러블이다
console.log(... new Map([['a','1'], ['b','2']]));
console.log(... new Set([1,2,3]));
console.log(...{a:1,b:2}); //  일반객체는 이터러블이 아니다

//const list = ...[1,2,3]; error

const arr= [1,2,3];

const max = Math.max(arr); // 가변인자함수다. 배열을 인수로 전달하면 최대값 구할 수 없음 = > NaN 반환

var max2 = Math.max.apply(null,arr);
const max3 = Math.max(... arr);

//E56
const arr2=[1,2].concat([3,4]);
console.log(arr2);

const arr3 = [...[1,2],...[3,4]]


var arr4 = [1,4];
var arr5= [2,3];

arr4.splice(1,0,arr5); //[1, [2,3],4]

Array.prototype.splice.apply(arr4,[1,0].concat(arr5));
arr4.splice(1,0,...arr5);

var origin = [1,2];
var copy=origin.slice();

console.log(copy);
console.log(copy === origin) //f

const origin2 = [1,2];
const copy2=[...origin2];

console.log(copy2);
console.log(copy2 === origin2) //f 


//Ess
function sum(){
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (pre, cur){
        return pre + cur;
    }, 0);
}

console.log(sum(1,2,3));

const arrayLike = {
    0:1, 1:2, 2:3, length:3
};

const arr6 = Array.prototype.slice.call(arrayLike);

console.log(Array.isArray(arr));

function sum2(){
    return [...arguments].reduce((pre,cur) => pre+ cur,0);
}
console.log(sum(1,2,3));

const sum = (...args) => args.reduce((pre,cur) => pre+cur,0);

const arr7 = [...arrayLike]; //error 유사 배열 객체는 스프레드 문법의 대상이 될 수 없다

Array.from(arrayLike);