const circle1 = {
    redius: 5,
    getDiameter(){
        return 2 * this.radius;
    }
}

console.log(circle1.getDiameter());

const circle2 = {
    redius: 10,
    getDiameter(){
        return 2 * this.radius;
    }
}

console.log(circle2.getDiameter());