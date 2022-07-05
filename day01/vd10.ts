//rest
interface ArrayConstructor {
    from(arrayLike: any, mapFn?, thisArg?): Array<any>;
}
function getTotal(...numbers: number[]): number {
    const arr = Array.apply(null, arguments)
    console.log(arr);
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}

console.log(getTotal(10, 20, 30, 40));
console.log(getTotal(10, 20));

//nạp chồng hàm
function addNumbers(a: number, b: number): number {
    return a + b;
}
function addStrings(a: string, b: string): string {
    return a + b;
}

//=> nạp chồng hai hàm trên
function add(a: number | string, b: number | string): any {
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string'){
        return a + b;
    } 
}

//or
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//    return a + b;
// }


//quá tải hàm
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

//quá tải phương thức

class Counter{
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number) : number | number[]{
        if (target) {
            let arr: number[] = [];
            for (let i = this.current; i <= target; i++) {
                arr.push(i);
            }
            this.current = target;
            return arr;
        }
        return ++this.current;
    };

}
let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array

export { }