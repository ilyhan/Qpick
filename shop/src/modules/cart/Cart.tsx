import { CartProduct, TotalPrice } from "@/common/helper/cartfunction";
import { Product } from "@/data/data";
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
import { useEffect, useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    // useEffect(() => {
    //     const savedCart = sessionStorage.getItem('cart');
    //     if (savedCart) {
    //         setCart(JSON.parse(savedCart));
    //     }
    // }, []);

    useEffect(() => {
        if (!cart.length){
            const savedCart = sessionStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }else{
            console.log(cart)
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const Increment = (id: number) => {
        const newCart = cart.map(item =>
            item.id === id && item.quantity < 99 ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart)
    };

    const Decrement = (id: number) => {
        setCart(cart.map(item =>
            item.id === id
                ? item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                : item
        ));
    };

    return (
        <CartWtapper>
            <CartTitle>
                Корзина
            </CartTitle>

            <CartOrdersWrapper>
                <CartList>
                    {cart && cart.map(product => (
                        <li key={product.id}>
                            <CartCard
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                img={product.img}
                                // product.quantity попробуй функции определить в карточке а это передать и засунуть в стейт
                                increment={Increment}
                                decrement={Decrement}
                            />
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