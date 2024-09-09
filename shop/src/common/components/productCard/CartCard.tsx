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
} from "@/common/components/productCard/style";
import trash from "@/common/icons/trash.svg";
import { memo, useState } from "react";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";

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
    const {t} = useTranslation();

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
                <CartProductImg src={img} alt={t('product')} />

                <CartProductInfo>
                    <CartProductTitle>
                        {title}
                    </CartProductTitle>

                    <CartProductPrice>
                        {price} ₽
                    </CartProductPrice>
                </CartProductInfo>

                <DeleteProductButton onClick={deleteItem}>
                    <DeleteIcon src={trash} alt={t('deleteIcon')}/>
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