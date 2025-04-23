function foo(){
    var x = 'local';
    console.log(x
    );
    return x;
}

foo();
console.log(x); //refferenceError;

var x = 'global';
function foo(){
    console.log(x);
    var x = 'local'; //이안에서 이미 선언이 되고 undefined로 초기화 되어있음
    return x;
}

foo(); //undefined
console.log(x);


(function () {
    var foo = 10;
}());

console.log(foo);

var MYAPP = {} //네임스페이스 객체
MYAPP.name = 'Lee';

console.log(MYAPP.name);

MYAPP.person = {
    name: "Lee",
    address: "Seoul"
};

console.log(MYAPP.person.name);


var Counter = (function (){
    var num = 0;

    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}());

console.log(Counter.num); // undefined
console.log(Counter.increase()); //1
console.log(Counter.increase()); //2
console.log(Counter.decrease()); //1
console.log(Counter.decrease()); //0

<script type = "module" src= "lib.mjs"></script>