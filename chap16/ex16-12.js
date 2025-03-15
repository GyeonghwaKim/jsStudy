const person = {name: 'Lee'}

console.log(Object.isFrozen(person));

Object.freeze(person);

person.age = 20;
console.log(person);

delete person.naem;
console.log(person);

person.name = 'kim';
console.log(person);


Object.defineProperty(person, 'name', {
    writable: true
});