function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);
let netPrice1 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice1);

let netPrice2 = <number>getNetPrice(100, 0.05, false);
console.log(netPrice2);
export{}