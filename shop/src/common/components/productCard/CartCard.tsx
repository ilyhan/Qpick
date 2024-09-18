import {
    CartCardWrapper,
    CartProductImg,
    CartProductPrice,
    CartProductTitle,
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
import plus from "@/common/icons/plus.svg";
import minus from "@/common/icons/minus.svg";
import { memo, useState } from "react";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";
import QuantityButton from "./components/QuantityButton";
import { formatPrice } from "@/common/helpers/formatPrice";

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

    const { deleteProduct } = useActions();

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
                        {formatPrice(price)} ₽
                    </CartProductPrice>
                </CartProductInfo>

                <DeleteProductButton onClick={deleteItem}>
                    <DeleteIcon src={trash} alt={t('deleteIcon')}/>
                </DeleteProductButton>
            </CartCardInfo>

            <TotalProductWrapper>
                <QuantityProductWrapper>
                    <QuantityButton 
                        id={id}
                        max={1}
                        change={-1}
                        quantity={quantity}
                        icon={minus}
                        title="minusQuantity"
                    />

                    <QuantityProduct>{quantity}</QuantityProduct>

                    <QuantityButton 
                        id={id}
                        max={9}
                        change={1}
                        quantity={quantity}
                        icon={plus}
                        title="plusQuantity"
                    />
                </QuantityProductWrapper>

                <TotalProductPrice>
                    {formatPrice(price * quantity)} ₽
                </TotalProductPrice>
            </TotalProductWrapper>
        </CartCardWrapper>
    );
});

export default CartCard;