import {
    CardWrapper,
    ProductImage,
    InfoWrapper,
    ProductTitle,
    ProductPrice,
    ProductRatingWrapper,
    ProductRating,
    RatingStar,
    ProductAction,
    ImageWrapper,
} from "@/common/components/productCard/style";
import star from "@/common/icons/star.svg";
import { Product } from "@/store/data/data";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";

interface CardProps {
    cardInfo: Product;
    click: ()=>void;
};

const Card = ({ cardInfo, click }: CardProps) => {
    const { addCartProduct } = useActions();

    const { t } = useTranslation();

    const setItemCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addCartProduct(cardInfo);
    };

    return (
        <CardWrapper onClick={click}>
            <ImageWrapper>
                <ProductImage src={cardInfo.img} alt={t('product')} />
            </ImageWrapper>

            <InfoWrapper>
                <ProductTitle>
                    {cardInfo.title}
                </ProductTitle>

                <ProductPrice>
                    {cardInfo.price} ₽
                </ProductPrice>

                <ProductRatingWrapper>
                    <RatingStar src={star} alt={t('rating')} />
                    <ProductRating>{cardInfo.rating}</ProductRating>
                </ProductRatingWrapper>

                <ProductAction onClick={setItemCart}>
                    {t('buy')}
                </ProductAction>
            </InfoWrapper>
        </CardWrapper>
    );
};

export default Card;