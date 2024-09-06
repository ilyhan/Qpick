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

const Cart = () => {
    return (
        <CartWtapper>
            <CartTitle>
                Корзина
            </CartTitle>

            <CartOrdersWrapper>
                <CartList>
                    <li><CartCard /></li>
                    <li><CartCard /></li>
                    <li><CartCard /></li>
                    <li><CartCard /></li>
                </CartList>

                <div style={{ position: 'relative' }}>
                    <SideBarWrapper>
                        <SideBar>
                            <TotalResult>ИТОГО</TotalResult>
                            <TotalResult>P 2979</TotalResult>
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