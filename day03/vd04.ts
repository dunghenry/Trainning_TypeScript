class Stack<T>{
    private elements: T[] = []
    constructor(private size: number){

    }
    isEmpty(): boolean{
        return this.elements.length == 0;
    }
    isFull(): boolean{
        return this.elements.length == this.size;
    }
    push(element: T): void {
        if(this.elements.length === this.size) {
            throw new Error("The stack is overflow");
        }
        this.elements.push(element);
    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
let numbers = new Stack<number>(5);
// numbers.push(1);

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

while(!numbers.isFull()) {
    let random = randBetween(1, 10);
    numbers.push(random);
}
console.log(numbers);


let words = "The quick brown fox jumped over the lazy dog".split(" ");
let wordStack = new Stack<string>(words.length);
words.forEach((word : string )=> wordStack.push(word));
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
console.log(words);

export { }