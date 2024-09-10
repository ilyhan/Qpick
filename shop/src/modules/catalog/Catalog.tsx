import {
    CatalogWrapper,
    TitleChapter,
    ProductsWrapper,
} from "@/modules/catalog/style";
import Card from "@/common/components/productCard/Card";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Product } from "@/store/data/data";
import ProductModal from "./modal/ProductModal";

const Catalog = () => {
    const productes = useSelector((state: RootState) => state.products.products);
    const { t } = useTranslation();

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return (
        <CatalogWrapper>
            {selectedProduct && <ProductModal
                isOpen={isModalOpen}
                setOpen={closeModal}
                product={selectedProduct}
            />}

            {productes.map(headfones => (
                <>
                    <TitleChapter>{t(headfones.title)}</TitleChapter>

                    <ProductsWrapper>
                        {headfones.productes.map(headfone => (
                            <Card
                                key={headfone.id}
                                cardInfo={headfone}
                                click={() => openModal(headfone)}
                            />
                        ))}
                    </ProductsWrapper>
                </>
            ))}
        </CatalogWrapper>
    );
};

export default Catalog;