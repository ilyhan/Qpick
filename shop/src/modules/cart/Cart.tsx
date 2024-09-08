import {
    CartWtapper,
    CartTitle,
    CartList,
    CartOrdersWrapper,
    SideBarWrapper,
    SideBar,
    TotalResult,
    PaymentButton,
} from "@/modules/cart/style";
import CartCard from "@/modules/productCard/CartCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.products);

    const TotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartWtapper>
            <CartTitle>
                {cart.length ? 'Корзина' : 'Корзина пуста'}
            </CartTitle>

            <CartOrdersWrapper>
                <CartList>
                    {cart && cart.map(product => (
                        <li key={product.id}>
                            <CartCard {...product}/>
                        </li>
                    ))}
                </CartList>

                <div style={{ position: 'relative' }}>
                    <SideBarWrapper>
                        <SideBar>
                            <TotalResult>ИТОГО</TotalResult>
                            <TotalResult>P {TotalPrice()}</TotalResult>
                        </SideBar>

                        <PaymentButton>
                            Перейти к оформлению
                        </PaymentButton>
                    </SideBarWrapper>
                </div>
            </CartOrdersWrapper>
        </CartWtapper >
    );
};

export default Cart;