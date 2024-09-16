import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData, SetErrorUser, SetFieldUser } from '@/store/reducers/order/interface';

const initialState: IUserData = {
    firstName: '',
    lastName: '',
    phoneNumber: '+7',
    errors: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setField(state, action: PayloadAction<SetFieldUser>) {
            state[action.payload.field] = action.payload.value;
        },

        setErrors(state, action: PayloadAction<SetErrorUser>) {
            state.errors[action.payload.field] = action.payload.error;
        },

        clearFormUser(state) {
            state.firstName = '';
            state.lastName = '';
            state.phoneNumber = '+7';
            state.errors = {
                firstName: '',
                lastName: '',
                phoneNumber: '',
            };
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;