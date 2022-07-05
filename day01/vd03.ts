let counter: number = 0;

//default
function setCounter(max = 100) : void{
    console.log(max);
}

setCounter(100);

function increment(counter: number) : number {
    return ++counter;
}

console.log(increment(10));
let items : any[] = [1, "hi", null];
export { }