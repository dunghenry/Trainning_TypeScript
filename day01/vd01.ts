function logger(msg: string): void {
    console.log(msg);
}
let msg: string = "Xin chao";
logger(msg);

interface Product {
    id: number;
    name: string;
    price: number;
}

function getProduct(id: number): Product {
    return {
        id,
        name: `Product ${id}`,
        price: 99.5
    }
}

const product = getProduct(1);

console.log(`The product ${product.name} costs $${product.price}`);

const showProduct = (name: string, price: number): void => {
    console.log(`The product ${name} costs $${price}`);
}

showProduct(product.name, product.price);

const getPriceProduct = (name: string, price: number): number => {
    return price;
}

const price = getPriceProduct(product.name, product.price);

console.log(price);

console.log(typeof price);
export { }