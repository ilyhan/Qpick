import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    errors: IErrors;
};

interface IErrors {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
};

const initialState: IUserData = {
    firstName: '',
    lastName: '',
    phoneNumber: '+7',
    errors: {},
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setField(state, action: PayloadAction<{ field: keyof IUserData; value: string }>) {
            state[action.payload.field] = action.payload.value;
        },

        setErrors(state, action: PayloadAction<{ field: keyof IErrors; error: string | undefined }>) {
            state.errors[action.payload.field] = action.payload.error;
        },

        clearFormUser(state) {
            state.firstName = '';
            state.lastName = '';
            state.phoneNumber = '+7';
            state.errors = {};
        },
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;