//void
function log(msg: string): void {
    console.log(msg);
}
log("Hi")

let useless: void = undefined;
console.log(useless);
// useless = null;

//never
function raiseError(msg: string): never {
    throw new Error(msg);
}

function reject() {
    return raiseError("Rejected")
}
console.log(reject);

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

let neverOccur = (): never => {
    throw new Error('Never!');
}
function fn(a: string | number): boolean {
    if (typeof a === 'string') {
        return true;
    }
    else if (typeof a === 'number') {
        return false;
    }
    return neverOccur();
}

export { }