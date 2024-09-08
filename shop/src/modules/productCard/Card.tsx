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
} from "@/modules/productCard/style";
import star from "@/common/icons/star.svg";
import { Product } from "@/data/data";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";

interface CardProps {
    cardInfo: Product;
};

const Card = ({ cardInfo }: CardProps) => {
    const { addCartProduct } = useActions();
    const { t } = useTranslation();

    const setItemCart = () => {
        addCartProduct(cardInfo);
    };

    return (
        <CardWrapper>
            <ImageWrapper>
                <ProductImage src={cardInfo.img} alt="товар" />
            </ImageWrapper>

            <InfoWrapper>
                <ProductTitle>
                    {cardInfo.title}
                </ProductTitle>

                <ProductPrice>
                    {cardInfo.price} ₽
                </ProductPrice>

                <ProductRatingWrapper>
                    <RatingStar src={star} alt="Рейтинг товара" />
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