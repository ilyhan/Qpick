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
import trash from "@/common/icons/trash.svg";
import { memo, useState } from "react";
import { useActions } from "@/store/actions";

interface CartCardProps {
    id: number;
    img: string;
    price: number;
    title: string;
    quantity: number;
};

const CartCard = memo(({
    id,
    img,
    price,
    title,
    quantity,
}: CartCardProps) => {
    const [isDelete, setIsDelete] = useState(false);

    const {
        setQuantity,
        deleteProduct
    } = useActions();

    const deleteItem = () => {
        setIsDelete(true);
        setTimeout(() => deleteProduct({ id: id }), 500)
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
                        onClick={() => setQuantity({ id: id, change: -1 })}
                        disabled={quantity === 1}
                    >
                        -
                    </QuantityButton>

                    <QuantityProduct>{quantity}</QuantityProduct>

                    <QuantityButton
                        onClick={() => setQuantity({ id: id, change: 1 })}
                        disabled={quantity === 9}
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
});

export default CartCard;