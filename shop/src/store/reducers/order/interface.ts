import { CartProduct } from '@/store/reducers/cart/interface';

export type TypeOrder = 'Pickup' | 'Delivery';

export interface OrderState {
    type: TypeOrder;
    pickup?: string; //адрес магазина
    products: CartProduct[];
};

export interface IAddress {
    address: string;
    flat?: string;
    entrance?: string;
    floor?: string;
    comment?: string;
    errorAddress?: string;
    isValid?: boolean;
};

export interface ChangeField {
    field: keyof IAddress;
    value: string;
};

export interface IError {
    field: keyof IAddress;
    error: string | undefined;
};

export interface IUserData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    errors: IErrorsUser;
};

export interface IErrorsUser {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
};

export interface SetFieldUser {
    field: keyof IUserData;
    value: string;
};

export interface SetErrorUser {
    field: keyof IErrorsUser;
    error: string | undefined;
};

