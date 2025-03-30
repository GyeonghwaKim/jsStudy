// var arr = [1,2,3];

// var one = arr[0];
// var two  = arr[1];
// var three = arr[2];

// console.log(one,two,three);

// const arr = [1,2,3];

// const [one, two, three] = arr;

// console.log(one, two, three);


// //const [x,y]; error
// const [a,b] = {};

// let x,y;
// [x,y] = [1,2];

// const [a2,b2] = [1,2];
// console.log(a,b);

// const [c,d] =[1];
// console.log(c,d) // 1 undefiend

// const [e,f] =[1,2,3];
// console.log(e,f) //1,2

// const [g,,h] =[1,2,3];
// console.log(g,h) //1,2

// const [g1,h1=3,i] =[1,2];
// console.log(g1,h1,i) //1,2


// const [e,f=10,g=11]= [1,2,3];
// console.log(e,f,g);


// function parseUrl(url =''){
//     const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
//     console.log(parsedURL);

//     if(!parsedURL) return {};

//     const [, protocol, host, path]= parsedURL;
//     return { protocol, host, path};
// }
// const parsedURL = parseUrl('https://developer.mozilla.org/ko/docs/Web/JavaScript');
// console.log(parsedURL)


const [x, ...y] = [1,2,3];
console.log(x,y);

// var user = { firstName: "Ungmo", lastName: 'Lee' }

// var firstName = user.firstName;
// var lastName = user.lastName;

// console.log(firstName, lastName);


// const user = { firstName: "Ungmo", lastName: 'Lee' }

// // const { lastName, firstName } = user;
// // const { lastName: lastName, firstName: firstName } = user;

// //console.log(firstName, lastName);

// const { lastName: ln, firstName: fn } = user;
// console.log(ln,fn);


// const {lastName1, firstName1} = {firstName1: "ㅋㅋ", lastName1: "ㅎㅎ"}



//const {lastName2, firstName2 }; SyntaxError
//const {lastName3, firstName3 } = null; TypeError

//const { firsName = "Ungmo", lastName} = {lastName : 'LEe'};

// const { firstName: fn = 'Ungmo', lastName : ln} = {lastName: "Lee"};
// console.log(fn,ln);

// const str = 'Hello';

// const {length} =str;
// console.log(length); //5

// const todo = { id: 1 , content: 'HTML', completed: true };
// //const { id } = todo;
// console.log(id);//1

// function printTodo(todo){
//     console.log(`할일 ${todo.content}은 ${todo.completed ? '완료' : '비완료'}`);
// }
// printTodo({id: 1, content: 'HTML', completed: true});

// function printTodo2({content, completed}){
//     console.log(`할일 ${content}은 ${completed ? '완료' : '비완료'}`);
// }

// printTodo({id: 1, content: 'HTML', completed: true});

// const todos = [
//     { id: 1, content: 'HTML', completed: true },
//     { id: 2, content: 'CSS', completed: false },
//     { id: 3, content: 'JS', completed: false }
//   ];

// const [,{id}] = todos;
// console.log(id); //2
 
const user = {
    name: 'Lee',
    address: {
        zipCode : '03068',
        city: 'Seoul'
    }
};

const { address: {city}} = user;
console.log(city);

const {q, ...rest} = {x:1,y:2,z:3};
console.log(q,rest);
