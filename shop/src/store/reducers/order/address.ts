import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChangeField, IError } from './interface';

export interface IAddress {
    address: string;
    flat?: string;
    entrance?: string;
    floor?: string;
    comment?: string;
    errorAddress?: string;
    isValid?: boolean;
};


const initialState: IAddress = {
    address: '',
    isValid: false,
};

const addressSlice = createSlice({
    name: 'adress',
    initialState,
    reducers: {
        setFieldAdress(state, action: PayloadAction<ChangeField>) {
            const { field, value } = action.payload;

            if (field !== 'isValid')
                state[field] = value;
        },

        setErrorAddress(state, action: PayloadAction<IError>) {
            const { field, error } = action.payload;

            if (field === 'errorAddress') {
                state[field] = error;
                state.isValid = !error?.length;
            }
        },

        clearAddress(state) {
            state.address = '';
            state.comment = undefined;
            state.flat = undefined;
            state.entrance = undefined;
            state.floor = undefined;
            state.errorAddress = undefined;
            state.isValid = false;
        },
    },
});

export const addressReducer = addressSlice.reducer;
export const addressActions = addressSlice.actions;