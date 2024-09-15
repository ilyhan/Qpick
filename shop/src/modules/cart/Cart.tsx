import {
    CartWtapper,
    CartTitle,
    CartList,
    CartOrdersWrapper,
} from "@/modules/cart/style";
import CartCard from "@/common/components/productCard/CartCard";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import TotalSideBar from "@/common/components/sidebar/TotalSideBar";
import ModalConfirm from "@/common/ui/ModalConfirm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "@/store/actions";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.products);
    const order = useSelector((state: RootState) => state.order.products);

    const { 
        setProduct,
        clearForm,
        clearFormUser,
        clearAddress
    } = useActions();

    const { t } = useTranslation();

    const TotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        setProduct({products: cart});
    };

    const [isOpen, setIsOpen] = useState<boolean>(!!order.length);
    const navigate = useNavigate();

    const onOk = () => {
        setIsOpen(false);
        navigate('/qpick/checkout');
    };

    const onCancel = () => {
        setIsOpen(false);
        clearForm();
        clearFormUser();
        clearAddress();
    };

    return (
        <>
            <CartWtapper>
                <CartTitle>
                    {cart.length ? t('cart') : t('emptyCart')}
                </CartTitle>

                <CartOrdersWrapper>
                    <CartList>
                        {cart && cart.map(product => (
                            <li key={product.id}>
                                <CartCard {...product} />
                            </li>
                        ))}
                    </CartList>

                    {cart.length
                        ? <TotalSideBar
                            price={TotalPrice()}
                            text="Перейти к оформлению"
                            link="/qpick/checkout"
                            onClick={handleCheckout}
                        />
                        : null}
                </CartOrdersWrapper>
            </CartWtapper>

            <ModalConfirm
                isOpen={isOpen}
                headerText="У вас есть незавершенный заказ Хотите продолжить?"
                okText="Да"
                cancelText="Нет"
                onOk={onOk}
                onCancel={onCancel}
            />
        </>
    );
};

export default Cart;