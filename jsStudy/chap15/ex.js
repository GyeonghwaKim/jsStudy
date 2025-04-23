var x = 1;
var y =1;

var x = 100;
var y ;


console.log(x);
console.log(y);

var x = 1;

if(true){
    var x = 10;
}

console.log(x); //10

var i = 10;

for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i); //5

console.log(foo); //undefined

foo = 123;

console.log(foo); //123

var foo;

var foo = 123;

var foo = 21434;

let foo = 1;

{
    let foo = 2;
    let bar = 3;
}

console.log(foo); //1
console.log(bar) // refference error


console.log(foo); // referenceError

let foo;
console.log(foo); // undefined

foo = 1;
console.log(foo); //1

let foo = 1;

{
    console.log(foo);
    let foo = 2;
}


var x = 1;

y = 2;

function foo(){

}

console.log(window.x);
console.log(x);

console.log(window.y);
console.log(y);

console.log(window.foo);
console.log(foo);

let x = 1;

console.log(window.x);
console.log(x);

const foo = 1;

const foo; // 에러 , 선언과 동시에 초기화  필수

{
    console.log(foo)
    const foo = 1;
    console.log(foo);
}

console.log(foo);

const foo = 1;
 foo = 2; //안됨

 let start = 1;

 function test() {
let start=2;
 }

