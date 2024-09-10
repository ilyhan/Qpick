import Modal from "@/common/ui/modal";
import { Product } from "@/store/data/data";
import {
    ModalWrapper,
    PoductInfoWrapper,
    ProductImage,
    ModalTitle,
    ModalDescription,
    ModalPrice,
    ModalButton,
    ActionsWrapper,
} from "@/modules/catalog/modal/style";
import { useTranslation } from "react-i18next";
import { useActions } from "@/store/actions";
import { useState } from "react";

interface ProductModalProps {
    isOpen: boolean;
    setOpen: () => void;
    product: Product;
};

const ProductModal = ({ isOpen, setOpen, product }: ProductModalProps) => {
    const [inWishlist, setInQ] = useState(!!product.isFavorite);

    const {
        addToWishlist,
        addCartProduct
    } = useActions();

    const { t } = useTranslation();

    const handleAddToCart = () => {
        addCartProduct(product);
    };

    const handleSetFavorite = () => {
        setInQ(true)
        addToWishlist({ id: product.id });
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={setOpen}
            closeIcon={true}
        >
            <ModalWrapper>
                <ProductImage src={product.img} alt={t('product')} />
                <PoductInfoWrapper>
                    <ModalTitle>
                        {product.title}
                    </ModalTitle>

                    <ModalDescription>
                        {product.description}
                    </ModalDescription>

                    <ModalPrice>
                        {product.price} ₽
                    </ModalPrice>

                    <ActionsWrapper>
                        <ModalButton onClick={handleAddToCart}>
                            Купить
                        </ModalButton>

                        <ModalButton onClick={handleSetFavorite} disabled={inWishlist}>
                            {inWishlist ? 'В избранном' : 'В избранное'}
                        </ModalButton>
                    </ActionsWrapper>
                </PoductInfoWrapper>
            </ModalWrapper>
        </Modal>
    );
};

export default ProductModal;