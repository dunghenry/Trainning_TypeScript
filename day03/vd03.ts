function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let randomE = getRandomElement<number>(numbers);
console.log(randomE);

function merge<U, V>(a: U, b: V){
    return{
        ...a,
        ...b
    }
}
const result = merge({name: "Dung"}, {age: 21})
console.log(result);

function merge1<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
let person = merge1(
    { name: 'John' },
    ['1']
)
console.log(person);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str); //John

export { }