import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/reducers/cart/cart";

const actions = {
    ...cartActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
