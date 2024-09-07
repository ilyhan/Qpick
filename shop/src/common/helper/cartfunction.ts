import { Product } from "@/data/data";

export interface CartProduct extends Product {
    quantity: number;
};

export const addNewProduct = (product: Product) => {
    const savedCart = sessionStorage.getItem('cart');
    let cartProducts: CartProduct[] = savedCart ? JSON.parse(savedCart) : [];

    const existingProduct = cartProducts.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        const newProduct: CartProduct = { ...product, quantity: 1 };
        cartProducts.push(newProduct);
    }

    sessionStorage.setItem('cart', JSON.stringify(cartProducts));
};

export const TotalPrice = () => {
    const savedCart = sessionStorage.getItem('cart');
    let total = 0;

    if (savedCart) {
        const products: CartProduct[] = JSON.parse(savedCart);
        products.forEach(item => {
            total += item.price * item.quantity;
        });
    };

    return total;
};

export const Quantity = (id: number) => {
    const savedCart = sessionStorage.getItem('cart');
    let quantity = 0;
    if (savedCart) {
        const products: CartProduct[] = JSON.parse(savedCart);
        products.some(item => {
            if (item.id === id) {
                quantity = item.quantity;
                return true;
            };
        });
    };

    return quantity;
};