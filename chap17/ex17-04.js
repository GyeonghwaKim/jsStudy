function Circle(radius){
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius
    }
}

const circle1= new Circle(5);
const circle2= new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

const circle3= Circle(15);
console.log(circle3); //UNDEFINED, 일반함수로 호출돼서 반환문 없음 

console.log(radius); // 15 일반함수로 호출 돼서 전역객체를 가르킴