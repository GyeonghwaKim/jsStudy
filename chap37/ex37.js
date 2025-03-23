// const set = new Set();
// console.log(set);

// const set1 = new Set([1,2,3,3]);
// console.log(set1);

// const set2 = new ('hello');
// console.log(set2);

// const uniq = array => array.filter((v,i,self) => self.indexOf(v) === i);
// console.log(uniq([2,2,1,2,3,4,5,2,1]));

// const uniq2 = arr => [...new Set(arr)];
// console.log(uniq2([2,2,1,2,3,4,5,2,1]));

// const {size} = new Set([1,2,3,3]);
// console.log(size);


// const set3= new Set([1,2,3]);
// console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size'));

// set3.size = 10;
// console.log(set3.size);

// const set = new Set();
// console.log(set)

// set.add(1);
// console.log(set);

// set.add(2).add(3);
// console.log(set);

// const set = new Set();

// console.log(NaN === NaN);
// console.log(0 === -0);

// set.add(NaN).add(NaN); // NaN 하나만
// console.log(set);

// set.add(0).add(-0);
// console.log(set);

// const set2 = new Set();

// set2
//     .add(1)
//     .add('a')
//     .add(true)
//     .add(undefined)
//     .add(null)
//     .add({})
//     .add([])
//     .add(() => {}) //이것도 ...>

// console.log(set2);

// const set3 =new Set([1,2,3]);
// console.log(set.has(2));
// console.log(set.has(4));


// const set4 = new Set([1,2,3]);

// set3.delete(2);
// console.log(set3);

// set3.delete(0);
// console.log(set3);

// set3.clear();

// const set = new Set([1,2,3]);

// set.forEach((v,v2,set) => console.log(v,v2,set));

// const set = new Set([1,2,3]);
// console.log(Symbol.iterator in set);

// for(const value of set) {
//     console.log(value);
// }

// console.log([...set]);

// const [a, ...rest] = set;

// Set.prototype.intersection = function (set){
//     const result = new Set();

//     for(const value of set) {
//         if(this.has(value)) result.add(value);
//     }

//     return result;
// }

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,4]);

// console.log(setA.intersection(setB));
// console.log(setB.intersection(setA));

// Set.prototype.interscetion= function (set){
//     return new Set([...this].filter( v => set.has(v)));
// }

// Set.prototype.intersection = function (set){
//     const result = new Set();

//     for(const value of set) {
//         if(this.has(value)) result.add(value)
//     }

//     return result;
// }

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,4]);

// console.log(setA.intersection(setB));


// Set.prototype.intersection = function(set){
//     return new Set([...this]).filter(v => set.has(v));
// }

// Set.prototype.union = function (set){
//     const result = new Set(this);

//     for (const value of set){
//         result.add(value);
//     }

//     return result;
// }


// Set.prototype.union = function (set){
//     return new Set([... this, ...set])
// };

// Set.prototype.difference = function (set){
//     const result = new Set(this);

//     for (const value of set){
//         result.delete(value); //없는걸지워도 에러가 나지않나? true/false 반환
//     }
// }

// Set.prototype.difference = function (set){
//     return new Set([... this].filter( v => !set.has(v)));
// }

// Set.prototype.isSuperset = function (subset) {

//     for(const value of subset){
//         if (!this.has(value)) return false;
//     }

//     return true;

// };

// Set.prototype.isSuperset = function (subset) {
//     const supersetArr = [...this];
//     return [...subset].every( v => supersetArr.includes(v));
// }

// const setA = new Set([1,2,3,4]);
// const setB = new Set([2,4]);

// console.log(setA.union(setB));

// const map = new Map();

// console.log(map);


// console.log(map1);

// const map2 = new Map([1,2]); // error

// const map3 = new Map([['key1', 'value1'],['key1', 'value1'] ]);
// console.log(map3);

// const {size} = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(size);

// const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

// console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));


// const map = new Map();

// console.log(map);

// map.set('key1', 'value1');

// console.log(map);

// map.set('key');

// const map = new Map();

// console.log(NaN === NaN); //false 
// console.log(0 === -0); //true

// map.set(NaN, 'value1').set(NaN, 'value2');

// console.log(map);

// map.set(0,'value1').set(-0, 'value2');
// console.log(map);


const map = new Map();

const lee = { name : 'Lee'}
const kim = { name: 'Kim' }

map.set(lee, 'developer').set(kim,'designer');

console.log(map);

console.log(map.get(lee));
console.log(map.get('key'))//undefined;

console.log(map.has(lee));

map.clear();

map.forEach((v,k,map) => console.log(v,k,map));


console.log(Symbol.iterator in map);

for (const entry of map){
    console.log(entry);
}

console.log([...map]);

const [a,b] = map;
console.log(a,b);

for (const key of map.keys()){
    console.log(key);
}

for (const value of map.values()){
    console.log(value);
}

for (const entry of map.entries()){
    console.log(entry);
}

