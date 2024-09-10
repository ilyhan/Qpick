
import { HeadphoneCategory, headphones } from "@/store/data/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductes {
    products: HeadphoneCategory[],
    count: number,
};

const initialState: IProductes = {
    products: headphones,
    count: 0,
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<{ id: number }>) {
            state.products.forEach(item => {
                item.productes = item.productes.map(product => {
                    if (product.id === action.payload.id && !product.isFavorite) {
                        state.count = state.count + 1;
                        return { ...product, isFavorite: true }
                    } else {
                        return product;
                    }
                });
            });
        },
        deleteFromWishlist(state, action: PayloadAction<{ id: number }>) {
            state.products.forEach(item => {
                item.productes = item.productes.map(product => {
                    if (product.id === action.payload.id && product.isFavorite) {
                        state.count = state.count - 1;
                        return { ...product, isFavorite: false }
                    } else {
                        return product;
                    }
                });
            });
        },
    }
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;