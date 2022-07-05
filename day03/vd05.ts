interface Person<T1, T2>{
    name: T1;
    age: T2
}
let person : Person<string, number> = {
    name: "Dung",
    age: 21
}
console.log(person);

interface Collection<T>{
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T>{
    private items: T[] = [];
    add(o: T): void {
       this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if(index > -1){
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();
for(let i = 0; i < 10; i++){
    list.add(i);
}
console.log(list);


interface Options<T>{
    [name: string]: T;
}
let inputOptions : Options<boolean> = {
    'disabled': true,
}
console.log(inputOptions);
export { }