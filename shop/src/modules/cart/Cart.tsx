import {
    CartWtapper,
    CartTitle,
    CartList,
    CartOrdersWrapper,
    SideBarWrapper,
    SideBar,
    TotalResult,
    PaymentButton,
    PositionWrapper,
} from "@/modules/cart/style";
import CartCard from "@/common/components/productCard/CartCard";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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

                {cart.length ? <PositionWrapper>
                    <SideBarWrapper>
                        <SideBar>
                            <TotalResult>{t('total')}</TotalResult>
                            <TotalResult>P {TotalPrice()}</TotalResult>
                        </SideBar>

                        <PaymentButton>
                            {t('registration')}
                        </PaymentButton>
                    </SideBarWrapper>
                </PositionWrapper> : null}
            </CartOrdersWrapper>
        </CartWtapper >
    );
};

export default Cart;