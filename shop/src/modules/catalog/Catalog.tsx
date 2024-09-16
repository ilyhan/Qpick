import {
    CatalogWrapper,
} from "@/modules/catalog/style";
import { useCallback, useEffect, useState } from "react";
import { Product } from "@/store/data/data";
import ProductModal from "@/modules/catalog/modal/ProductModal";
import RenderCards from "./render/RenderCards";

const Catalog = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback((product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }, []);

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
            <RenderCards openModal={openModal}/>
        </CatalogWrapper>
    );
};

export default Catalog;