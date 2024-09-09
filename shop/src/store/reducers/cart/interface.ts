import { Product } from "@/store/data/data";

export interface IQuantity {
    id: number;
    change: number;
};

export interface CartProduct extends Product {
    quantity: number;
};

export interface ICart {
    products: CartProduct[];
};