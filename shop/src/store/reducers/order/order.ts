import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '@/store/reducers/cart/interface';

interface OrderState {
    type: 'Pickup' | 'Delivery';
    pickup?: string; //адрес магазина
    products: CartProduct[];
};

const initialState: OrderState = {
    type: 'Pickup',
    products: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setType(state, action: PayloadAction<{ newType: 'Pickup' | 'Delivery' }>) {
            state.type = action.payload.newType;
        },

        setProduct(state, action: PayloadAction<{ products: CartProduct[] }>) {
            state.products = action.payload.products;
        },

        setStore(state, action: PayloadAction<{storeAddress: string}>){
            state.pickup = action.payload.storeAddress;
        },

        clearForm(state) {
            state.pickup = undefined;
            state.type = 'Pickup';
            state.products = [];
        },
    },
});

export const orderReducer = orderSlice.reducer;
export const orderActions = orderSlice.actions;