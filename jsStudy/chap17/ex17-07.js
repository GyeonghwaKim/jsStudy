//생성자 함수
function Circle(r){

    //인스턴스 초기화
    this.radius = r;
    this.getDiameter = function (){
        return 2 * this.r;
    }
}

//인스턴스 생성
const circle1 = new Circle(5);
