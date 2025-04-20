function add(x,y) {
    return x+y;
}

add(2,5);

var result = add(2,5);

console.log(result)

var f = function add(x,y){
    return x+y;
}


console.dir(add);
var add = function add(x,y){
return x+y;
}


function foo() {
    console.log("foo");
}

foo();

var add =function(x,y){
    return x+y;
}

var add = function foo(x,y){
    return x+y;
}

console.dir(add);
console.dir(sub);

console.log(add(2,5));
console.log(sub(2,5));


var sub = function(x,y){
    return x-y;
}

var add = new Function('x','y','return x + y');

var add1 = (function (){
    var a = 10;
    return function(x,y){
        return x+y+a;
    }
}());

console.log(add1(1,2));

var add2 = (function(){
    var a = 10;
    return new Function('x', 'y', 'retrun x + y + a ');
}())

var result = add(1,2);

function add (x,y){
    return x+y;
}

function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('인수는 모두 숫자값이어야한다.')
    }

    return x+y;

}


function add ( a,b,c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;

    return a+ b+ c;
}

function multiply(x,y){
    return x+y;
}

var result = multiply(3,5);
console.log(result);


function multiply(x,y){
    return x+y;

    console.log("실행되지 않는다")
}

function foo(){
    return;
}

console.log(foo()); // undefined


function foo(){
}

console.log(foo()); // undefined

function changeVal(primitive,obj){
    primitive += 100;
    obj.name = 'Kim';
}

var num = 100;
var person = {name: 'Lee'}

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);

(function (){
    var a= 3;
    var b = 5;
    return a*b;
}());

foo(); // rererencError

// function(){

// }();


console.log(typeof (function f(){}));

(function (){

}())

(function (){

})()

!function (){

}();

+function (){

}();

res = (function(a,b){
    return a * b;
}(3,5));

console.log(res);

function countdown(n){
    for (var i = n; i>= 0 ;i--) console.log(i);
}

console.log(countdown(4));

function countdown(n){
    if(n < 0) return;
    console.log(n);
    countdown(n-1);
}

countdown(4)


function factorial(n){
    if(n <= 1) return 1;

    return n* factorial(n-1);
}

console.log(factorial(2));

var factorial = function foo(n){
    if(n <= 1) return 1;

    return n* factorial(n-1); // ?? foo? factorial 둘다 됨
}

console.log(factorial(2)); 
console.log(foo(2)); 

function outer(){
    var x = 1;

    function inner() {
        var y = 2;
        console.log(x+y);
    }

    inner();
}

outer();


function repeat(n){
    for(var i = 0; i < n; i++) console.log(i);
}

repeat(5);

function repeat1(n){
    for(var i = 0; i < n; i++) console.log(i);
}

repeat1(5);

function repeat2(n){
    for(var i = 0; i < n; i++){
        if(i%2) console.log(i);
    }
}
repeat2(5);

function repeat(n,f){
    for(var i = 0; i < n; i++){
        f(i);
    }
}

var logAll = function(i){
    console.log(i);
}

repeat(4,logAll);

document.getElementById('myButton').addEventListener('click', function(){
    console.log('button clicked');
});

var res = [1,2,3].map(function (item){
    return item * 2;
});

res = [1,2,3].filter(function (item){
    return item % 2;
});

var count = 0;

function increase(n){
    return ++n;
}

count = increase(count);
count = increase(count); //외부상태에 의존 안한다 ..?


var count = 0;

function increase(){
    return ++count;
}

increase();
increase(); //외부상태에 의존 안한다 ..?




