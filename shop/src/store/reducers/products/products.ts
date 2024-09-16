
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
            let isAdded = false; 

            state.products.forEach(category => {
                category.productes.forEach(product => {
                    if (product.id === action.payload.id && !product.isFavorite) {
                        product.isFavorite = true; 
                        isAdded = true;
                    }
                });
            });

            if (isAdded) {
                state.count += 1; 
            }
        },
        deleteFromWishlist(state, action: PayloadAction<{ id: number }>) {
            let isRemoved = false; 

            state.products.forEach(category => {
                category.productes.forEach(product => {
                    if (product.id === action.payload.id && product.isFavorite) {
                        product.isFavorite = false; 
                        isRemoved = true;
                    }
                });
            });

            if (isRemoved) {
                state.count -= 1; 
            }
        },
    }
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;