import {
    CardWrapper,
    ProductImage,
    InfoWrapper,
    ProductTitle,
    ProductPriceWrapper,
    ProductRatingWrapper,
    ProductRating,
    RatingStar,
    ProductAction,
    ImageWrapper,
    ImageButton,
    OldPrice,
} from "@/common/components/productCard/style";
import star from "@/common/icons/star.svg";
import { Product } from "@/store/data/data";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";
import Favorite from "@/common/components/productCard/components/Favorite";
import { formatPrice } from "@/common/helpers/formatPrice";

interface CardProps {
    cardInfo: Product;
    click?: () => void;
    withHeart?: boolean;
};

const Card = ({ cardInfo, click, withHeart }: CardProps) => {
    const {
        addCartProduct,
    } = useActions();

    const { t } = useTranslation();

    const setItemCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addCartProduct(cardInfo);
    };

    return (
        <CardWrapper>
            {(withHeart && cardInfo?.isFavorite) &&
                <Favorite id={cardInfo.id} />
            }

            <ImageWrapper>
                <ImageButton onClick={click}>
                    <ProductImage src={cardInfo.img} alt={t('product')} />
                </ImageButton>
            </ImageWrapper>

            <InfoWrapper>
                <ProductTitle onClick={click} title={t('infoProduct')}>
                    {cardInfo.title}
                </ProductTitle>

                <ProductPriceWrapper>
                    {formatPrice(cardInfo.price)} ₽ 
                    <br/>
                    {cardInfo.oldPrice && <OldPrice>
                        {formatPrice(cardInfo.oldPrice)} ₽
                    </OldPrice>}
                </ProductPriceWrapper>

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