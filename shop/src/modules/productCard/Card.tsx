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
} from "@/modules/productCard/style";
import star from "@/common/icons/star.svg";
import image from "../../../public/images/Image.png"

const Card = () => {
    return (
        <CardWrapper>
            <ProductImage src={image} />

            <InfoWrapper>
                <ProductTitle>
                    Apple BYZ S852I
                </ProductTitle>

                <ProductPrice>
                    2312 Р
                </ProductPrice>

                <ProductRatingWrapper>
                    <RatingStar src={star} alt="Рейтинг товара"/>
                    <ProductRating>4.7</ProductRating>
                </ProductRatingWrapper>

                <ProductAction>
                    Купить
                </ProductAction>
            </InfoWrapper>
        </CardWrapper>
    );
};

export default Card;