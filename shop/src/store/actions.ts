import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/reducers/cart/cart";
import { productsActions } from "@/store/reducers/products/products";
import { orderActions } from "@/store/reducers/order/order";
import { addressActions } from "@/store/reducers/order/address";
import { userActions } from "@/store/reducers/order/user"

const actions = {
    ...cartActions,
    ...productsActions,
    ...orderActions,
    ...addressActions,
    ...userActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
