import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAddress {
    address: string;
    flat?: string;
    entrance?: string;
    floor?: string;
    comment?: string;
    errorAddress?: string;
};

const initialState: IAddress = {
    address: '',
};

const addressSlice = createSlice({
    name: 'adress',
    initialState,
    reducers: {
        setFieldAdress(state, action: PayloadAction<{ field: keyof IAddress; value: string }>) {
            state[action.payload.field] = action.payload.value;
        },

        setErrorAddress(state, action: PayloadAction<{ field: keyof IAddress; error: string | undefined }>) {
            if (action.payload.field === 'errorAddress')
                state[action.payload.field] = action.payload.error;
        },

        clearAddress(state) {
            state.address = '';
            state.comment = undefined;
            state.flat = undefined;
            state.entrance = undefined;
            state.floor = undefined;
            state.errorAddress = undefined;
        },
    },
});

export const addressReducer = addressSlice.reducer;
export const addressActions = addressSlice.actions;