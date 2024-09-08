import {
    CartCardWrapper,
    CartProductImg,
    CartProductPrice,
    CartProductTitle,
    QuantityButton,
    TotalProductPrice,
    DeleteProductButton,
    DeleteIcon,
    CartProductInfo,
    CartCardInfo,
    QuantityProduct,
    TotalProductWrapper,
    QuantityProductWrapper
} from "@/modules/productCard/style";
// import image from "@/data/images/byz.png";
import trash from "@/common/icons/trash.svg";
import { Quantity } from "@/common/helper/cartfunction";
import { useState } from "react";

interface CartCardProps {
    id: number;
    img: string;
    price: number;
    title: string;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    deleteProduct: (id: number) => void;
};

const CartCard = ({ id, img, price, title, increment, decrement, deleteProduct }: CartCardProps) => {
    const quantity = Quantity(id);
    const [isDelete, setIsDelete] = useState(false);

    const deleteItem = () => {
        setIsDelete(true);
        setTimeout(()=>deleteProduct(id), 500)
    };

    return (
        <CartCardWrapper $isDelete={isDelete}>
            <CartCardInfo>
                <CartProductImg src={img} alt="Картинка товара" />

                <CartProductInfo>
                    <CartProductTitle>
                        {title}
                    </CartProductTitle>

                    <CartProductPrice>
                        {price} ₽
                    </CartProductPrice>
                </CartProductInfo>

                <DeleteProductButton onClick={deleteItem}>
                    <DeleteIcon src={trash} />
                </DeleteProductButton>
            </CartCardInfo>

            <TotalProductWrapper>
                <QuantityProductWrapper>
                    <QuantityButton
                        onClick={() => decrement(id)}
                        disabled={quantity === 1}
                    >
                        -
                    </QuantityButton>

                    <QuantityProduct>{quantity}</QuantityProduct>

                    <QuantityButton
                        onClick={() => increment(id)}
                        disabled={quantity === 99}
                    >
                        +
                    </QuantityButton>
                </QuantityProductWrapper>

                <TotalProductPrice>
                    {price * quantity} ₽
                </TotalProductPrice>
            </TotalProductWrapper>
        </CartCardWrapper>
    );
};

export default CartCard;