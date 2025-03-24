// setTimeout(function(){
//     console.log("일번!");
// }, 3000);

// console.log("2번!")

// function double(num){
//     return setTimeout(() => {
//         const doubleNum = num * 2;
//         console.log(doubleNum);
//     }, 1000);
// }

// const res = double(10);
// console.log(res);


function double(num,cb){
    setTimeout(() => {
        const doubleNum = num *2;
        cb(doubleNum);
    },1000);
}

double(10,(res) => {
    console.log(res);
});

console.log("마지막");
const promise = new Promise(
    function(resolve,reject){
        setTimeout(()=> {
            console.log("안녕")
        }, 500);
    }
)


const promise2= new Promise(
    function (resolve,reject){
        setTimeout(() => {
            resolve("성공")
        }, 500);
    }
)
promise2.then(function(res){
    console.log(res);
})

const promise3 = new Promise(
    function (resolve, reject){
        setTimeout(() => {
            reject("실패")
        }, 500);
    }
)

promise3.then(function (res){
    console.log("ㅋㅋ");
})

promise.catch(function (err){
    console.log(err);
})
