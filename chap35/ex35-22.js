const obj = {x:1,y:2};
const copy = {...obj};

console.log(copy);
console.log(obj === copy);


const merged = {x:1, y:2, ...{a:3,b:4}};
console.log(merged);

const merged2= Object.assign({}, {x:1,y:2},{y: 10, z:3});

const changed = Object.assign({}, {x:1,y:2}, {y:100});

const added = Object.assign({}, {x:1,y:2}, {z:0});

const merged3 = {...{x:1,y:2}, ...{y:10,z:3}};
const changed2= {...{x:1,y:2}, y:100}
const added2= {...{x:1,y:2}, z:0}