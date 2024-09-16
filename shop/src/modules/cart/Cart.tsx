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
import { useActions } from "@/store/actions";
import ContinueShop from "@/modules/cart/modal/ContinueShop";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.products);
    const { setProduct } = useActions();
    const { t } = useTranslation();

    const TotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        setProduct({ products: cart });
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
                            text={t('registration')}
                            link="/qpick/checkout"
                            onClick={handleCheckout}
                        />
                        : null}
                </CartOrdersWrapper>
            </CartWtapper>

            <ContinueShop />
        </>
    );
};

export default Cart;