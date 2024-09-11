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
import { useState } from "react";
import ProductsModal from "../../modal/selectedproducts/ProductsModal";

export const ProductList = () => {
    const productList = useSelector((state: RootState) => state.cart.products);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true)
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <ProductListWrapper>
                <ProductListTitle>Выбранные товары</ProductListTitle>

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
};

export default ProductList;