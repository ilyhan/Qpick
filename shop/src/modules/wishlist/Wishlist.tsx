import Card from "@/common/components/productCard/Card";
import {
    ProductsList,
    WishlistTitle,
    WishlistWrapper,
    ProductItem,
} from "@/modules/wishlist/style";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const allProductes = useSelector((state: RootState) => state.products.products);
    const { t } = useTranslation();

    return (
        <WishlistWrapper>
            <WishlistTitle>{t('wishlist')}</WishlistTitle>

            <ProductsList>
                {allProductes.map(categoryProducts => (
                    categoryProducts.productes.map(product =>
                        product.isFavorite &&
                        <ProductItem key={product.id}>
                            <Card
                                key={product.id}
                                cardInfo={product}
                                withHeart={true}
                            />
                        </ProductItem>
                    )
                ))}
            </ProductsList>
        </WishlistWrapper>
    );
};

export default Wishlist;