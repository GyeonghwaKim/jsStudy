function foo(){
}

const bar = function () {};

const baz = {
    x: function(){}
};

new foo();
new bar();
new baz.z();

const arrow = () => {

};

new arrow();

const obj = {
    x() {}
};

new obj.x();

function add(x,y){
    return x + y;
}

let inst = new add();

console.log(inst); // 빈객체 생성돼서 {}

function createUser(name, role){
    return {name, role}
}

inst = new createUser('Lee', 'admin');

console.log(inst); // {name : 'Lee' ..}

function Circle(r){
    this.radius =r;
    this.getDiameter =function (){
        return 2 * this.radius;
    };
}

const circle = Circle(5);

console.log(radius);
console.log(getDiameter());

circle.getDiameter(); //error 

function Circle(radius){
    if (!new.target){
        return new Circle(radius)
    }

    this.radius =r;
    this.getDiameter =function (){
        return 2 * this.radius;
    };
}

const circle2= Circle(10);
console.log(radius);
console.log(getDiameter());


