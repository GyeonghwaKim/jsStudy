function add(x,y){

    console.log(x,y);
    return x+y;
}

add(2,5);

console.log(x,y) // referenceError


var var1 =1;
if(true){
    var var2 = 2;
    if(true){
        var var3 =3;
    }
}

function foo(){
    var var4 = 4;

    function bar(){
        var var5 =5;
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4); //ReferenceError
console.log(var5); //ReferenceError


var x = 'global';

function foo(){
var x= 'local';
console.log(x);
}
foo(); //local

console.log(x); //global


function foo(){
    var x =1;
    var x = 2;

    console.log(x); //2
}

function bar(){
    let x=1;
    let x=2; // syntaxError
}


var x = 'global x';
var y = 'global y';


function outer(){
    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        var x= "inner's local x";

        console.log(x);
    console.log(y);
    console.log(z); // outer's local z;
    }

    inner();
}

outer();

console.log(x);
console.log(z); //reference error

function foo(){
    console.log("global function foo")
}

function bar(){
    function foo(){
        console.log("global function foo")
    }

    foo();
}

bar();

var x =1;

if(true){
    var x = 10;
}

console.log(x); //10

var i = 10;
for(var i = 0; i< 5; i++){
    console.log(i);
}

console.log(i);

var x = 1;

function foo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

foo(); //1
bar(); //1


var x = 1;

function foo(){
    var x = 10;

    function bar(){
        console.log(x);
    }
    bar();
}

