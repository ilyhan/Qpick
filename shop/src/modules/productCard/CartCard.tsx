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
import image from "../../../public/images/Image.png";
import trash from "@/common/icons/trash.svg";
import { useState } from "react";

const CartCard = () => {
    const [quantity, seQuantity] = useState(1);

    const minusItem = () => {
        seQuantity(quantity => quantity > 1 ? quantity - 1 : quantity);
    };

    const plusItem = () => {
        seQuantity(quantity => quantity < 99 ? quantity + 1 : quantity);
    };

    return (
        <CartCardWrapper>
            <CartCardInfo>
                <CartProductImg src={image} alt="Картинка товара" />

                <CartProductInfo>
                    <CartProductTitle>
                        Apple BYZ S852I
                    </CartProductTitle>

                    <CartProductPrice>
                        2979 Р
                    </CartProductPrice>
                </CartProductInfo>

                <DeleteProductButton>
                    <DeleteIcon src={trash} />
                </DeleteProductButton>
            </CartCardInfo>

            <TotalProductWrapper>
                <QuantityProductWrapper>
                    <QuantityButton
                        onClick={minusItem}
                        disabled={quantity === 1}
                    >
                        -
                    </QuantityButton>

                    <QuantityProduct>{quantity}</QuantityProduct>

                    <QuantityButton
                        onClick={plusItem}
                        disabled={quantity === 99}
                    >
                        +
                    </QuantityButton>
                </QuantityProductWrapper>

                <TotalProductPrice>
                    2979 Р
                </TotalProductPrice>
            </TotalProductWrapper>
        </CartCardWrapper>
    );
};

export default CartCard;