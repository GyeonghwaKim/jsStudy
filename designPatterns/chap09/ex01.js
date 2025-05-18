//콜백 사용예시
function makeRequest(url,callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}

makeRequest('http://', (e,d) => {
    if(e){
        console.log('error')
    }else{
        console.log(d);
    }
})

//promise 사용예시
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}

makeRequest('http:')
.then(data => console.log(data))
.catch(error => console.log(error));


// async/await 사용 예시
async function makeRequest(url){
    try{
        const response = await fetch(url);
        const data = await response.json(); // 네트워크 요청을 기다리기 위해 씀
        console.log(data);
    }catch (error){
        console.error(error);
    }
}


//콜백 지옥?
function makeRequest1(url,callback) {
    callback(null,response);
}

function makeRequest2(url,callback) {
    callback(null,response);
}

function makeRequest3(url,callback) {
    callback(null,response);
}

makeRequest1('',(e,d) => {
    if(e){
        console.log(e);
        return;
    }

    makeRequest2('',(e,d) => {
        if(e){
            console.log(e);
            return;
        }
        makeRequest3('',(e,d) => {
            if(e){
                console.log(e);
                return;
            }

        })
    })

})

//9.3 프로미스 패턴

//promise 사용예시
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });
}

makeRequest('http:')
.then(data => console.log(data))
.catch(error => console.log(error));

//프로미스 체이닝
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(e => reject(e))
    });
}
function processData(data){
    return processData;
}

makeRequest('')
.then(data => processData(data))
.then(processData => console.log(processData))
.catch(e => console.error(e));

//병렬처리
Promise.all([
    makeRequest(''),
    makeRequest('')
]).then(([data1,data2]) => {
    console.log(data,data);
})

//프로미스 순차 실행
Promise.resolve()
.then(() => makeRequest1())
.then(() => makeRequest2())
.then(() => makeRequest3())

//프로미스 메모이제이션
const cache = new Map();
function memoizedMakeRequest(url){
    if(cache.has(url)){
        return cache.get(url);
    }
    return new Promise((rs,rj) => {
        fetch(url)
        .then(resp => resp.json)
        .then(data => {
            cache.set(url, data);
            rs(data);
        })
        .catch(error => rj(error))
    });
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    memoizedMakeRequest('click', () => {
        memoizedMakeRequest('')
        .then(data => console.log(data))
        .catch(error => console.error(error));
    })
});

//파이프라인
function transform1(data){
    return transformData;
}
function transform2(data){
    return transformData;
}

makeRequest('')
.then(data => pipeline(data)
.then(transform1)
.then(transform2))
.then(transformData => console.log(transformData))
.catch(e => console.error(error));

//프로미스재시도
function makeRequestWithRetry(url){
    let attempts= 0;

    const makeRequest = () => new Promise((rs,rj) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => rs(data))
            .catch(error => reject(error))
    });

    const retry = error => {
        attempts ++;
        if(attempts >= 3){
            throw new Error('Request failed after 3 attemts');
        }
        console.log(`Retrying request: attemt ${attempts}`)
        return makeRequest();
    }

    return makeRequest().catch(retry);
}

//프로미스 데코레이터
function logger(fn) {
    return function (...args){
        console.log('Starting function...')
        return fn(...args).then(result => {
            console.log('Function completed');
            return result;
        })
    }
}
const makeRequestWithLogger = logger(makeRequest);
makeRequestWithLogger('')
.then(data => console.log(data))
.catch(error => console.error(error));

//프로미스 경쟁
Promise.race([
    //함수1
    //함수2
]).then(data => {
    console.log(data);
})


// 9.4 async/await 패턴
async function makeRequest(){
    try {
        const resp = await fetch('');
        const data = await resp.json();
        console.log(data)
    }catch (error){
        console.error(error);
    }
}


async function makeRequest(url) {
    const resp = await fetch('');
    const data = await resp.json();
    return data;
}

async function processData(data){
    return processData;
}

async function main(){
    const data = await makeRequest('')
    const processedData = await processData(data);
    console.log(processedData)}