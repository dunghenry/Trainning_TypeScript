function add(a: any, b: any) : any{
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    throw new Error('Invalid Parameters');
}
// add(true, false); //error

function add2(a: number | string, b: number | string) :  number | string{
    if(typeof a === 'string' && typeof b === 'string'){
        return a.concat(b);
    }
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    if(typeof a === 'string' && typeof b === 'number' || typeof a === 'number' && typeof b === 'string'){
        return `${a}${b}`;
    }
    throw new Error('Invalid Parameters');
}

console.log(add2("hehe", 1));
export { }