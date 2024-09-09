import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/reducers/cart/cart";
import { productsActions } from "@/store/reducers/products/products";


const actions = {
    ...cartActions,
    ...productsActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
