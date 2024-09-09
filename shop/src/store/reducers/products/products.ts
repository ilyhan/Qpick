
import { HeadphoneCategory, headphones } from "@/store/data/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProductes {
    products: HeadphoneCategory[],
};

const initialState: IProductes = {
    products: headphones,
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setFavorite(state, action: PayloadAction<{id: number}>){
            state.products.forEach(item => {
                item.productes = item.productes.map(product => 
                    product.id === action.payload.id 
                        ? {...product, isFavorite: !product.isFavorite} 
                        : product 
                );
            });
        },
    }
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;