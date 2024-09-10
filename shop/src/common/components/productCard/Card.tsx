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
    FavoriteButton,
    FavoriteIcon,
} from "@/common/components/productCard/style";
import star from "@/common/icons/star.svg";
import { Product } from "@/store/data/data";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";
import heartActive from "@/common/icons/heartActive.svg";

interface CardProps {
    cardInfo: Product;
    click?: () => void;
    withHeart?: boolean;
};

const Card = ({ cardInfo, click, withHeart }: CardProps) => {
    const {
        addCartProduct,
        deleteFromWishlist
    } = useActions();

    const { t } = useTranslation();

    const setItemCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        addCartProduct(cardInfo);
    };

    const handleSetFavorite = () => {
        deleteFromWishlist({id: cardInfo.id})
    };

    return (
        <CardWrapper onClick={click}>
            {(withHeart && cardInfo?.isFavorite) &&
                <FavoriteButton onClick={handleSetFavorite}>
                    <FavoriteIcon src={heartActive} />
                </FavoriteButton>
            }

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