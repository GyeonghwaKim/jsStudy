var person = {
    name: 'Lee',
    sayHello: function (){
        console.log(`Hello My name is ${this.name}`);
    }
};

console.log(typeof person);
console.log(person);

var empty = {};
console.log(typeof empty);

var person = {
    firstName: 'Ung-mo',
    'last-name': 'Lee' //-를 연산자로 해석하기때문
};

console.log(person);

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

var foo = {
    '':''
};

console.log(foo);

var foo = {
    0:1,
    1: 2,
    2:3,
} //프로퍼티키는 암묵적타입변환

var foo = {
    var: '',
    function:''
}

var foo = {
    name: 'Lee',
    name: 'Kim'
}

var circle = {
    radius: 5,

    getDiameter: function() {
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

var person = {
    name: 'Lee'
}

console.log(person.name);
console.log(person['name']);

var person = {
    name: "Lee"
};

console.log(person.age);

var person = {
    'last-name': 'Lee',
    1:10
}

person.'last-name';
person.last-name;

person[last-name];
person['last-name'];

person.1;
person.'1';
person[1]
person['1']

var person = {
    name:'Lee'
}

person.name='Kim';

console.log(person);

var person = {
    name:"Lee"
};

var person = {
    name: "Lee"
}

person.age=20;

person.log(person);

var person = {
    name:"Lee"
}

person.age = 20;
delete person.age;
delete person.addrss;

console.log(person);

var x = 1, y=1

var obj = {
    x: x,
    y: y
};

console.log(obj);

let x = 1 , y=2;
const obj = {x,y}

console.log(obj);

var prefix = 'prop';
var i =0;

var obj = {};

obj[prefix + '-'+ ++i] = i;
obj[prefix + '-'+ ++i] = i;
obj[prefix + '-'+ ++i] = i;

console.log(obj);


const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
}

console.log(obj)

var obj = {
    name: "Lee",
    sayHi: function(){
        console.log("Hi! " + this.name);
    }
};

obj.sayHi();


const obj = {
    name: 'Lee',
    sayHi() {
        console.log("hi"+this.name)
    }
}
obj.sayHi();
