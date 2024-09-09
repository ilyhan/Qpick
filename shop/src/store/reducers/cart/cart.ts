
import { Product } from "@/store/data/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, ICart, IQuantity } from "@/store/reducers/cart/interface";

const initialState: ICart = {
    products: [],
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCartProduct(state, action: PayloadAction<Product>) {
            const existingProduct = state.products.findIndex(item => item.id === action.payload.id);

            if (existingProduct >= 0) {
                if (state.products[existingProduct].quantity < 9)
                    state.products[existingProduct].quantity += 1;

            } else {
                const newProduct: CartProduct = { ...action.payload, quantity: 1 };
                state.products.push(newProduct);
            }
        },

        setQuantity(state, action: PayloadAction<IQuantity>) {
            const { id, change } = action.payload;

            state.products.some(item => {
                if (item.id === id) {
                    item.quantity += change;
                    return true;
                }
            });
        },

        deleteProduct(state, action: PayloadAction<{ id: number }>) {
            state.products = state.products.filter(item => item.id !== action.payload.id);
        },
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;