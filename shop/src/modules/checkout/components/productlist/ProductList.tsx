import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import {
    ProductListWrapper,
    ListProduct,
    ProductItem,
    ProductButton,
    ProductListTitle,
} from "@/modules/checkout/components/productlist/style";
import ShortCard from "@/common/components/productCard/ShortCard";
import { memo, useState } from "react";
import ProductsModal from "@/modules/checkout/modal/selectedproducts/ProductsModal";
import { useTranslation } from "react-i18next";

export const ProductList = memo(() => {
    const productList = useSelector((state: RootState) => state.order.products);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleOpenModal = () => {
        setIsOpen(true)
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <ProductListWrapper>
                <ProductListTitle>{t('selectedProducts')}</ProductListTitle>

                <ListProduct>
                    {productList.map(product => (
                        <ProductItem key={product.id}>
                            <ProductButton title={product.title} onClick={handleOpenModal}>
                                <ShortCard
                                    img={product.img}
                                    quantity={product.quantity}
                                />
                            </ProductButton>
                        </ProductItem>
                    ))}
                </ListProduct>
            </ProductListWrapper>

            <ProductsModal
                isOpen={isOpen}
                setOpen={handleCloseModal}
            />
        </>
    )
});

export default ProductList;