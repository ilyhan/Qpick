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

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.products);
    const { t } = useTranslation();

    const TotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
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
                    />
                    : null}
            </CartOrdersWrapper>
        </CartWtapper >
    );
};

export default Cart;