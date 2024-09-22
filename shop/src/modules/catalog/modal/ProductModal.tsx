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
import { formatPrice } from "@/common/helpers/formatPrice";

interface ProductModalProps {
    isOpen: boolean;
    setOpen: () => void;
    product: Product;
};

const ProductModal = ({ isOpen, setOpen, product }: ProductModalProps) => {
    const [inWishlist, setInWishlist] = useState(!!product.isFavorite);

    const {
        addToWishlist,
        addCartProduct
    } = useActions();

    const { t } = useTranslation();

    const handleAddToCart = () => {
        addCartProduct(product);
    };

    const handleSetFavorite = () => {
        setInWishlist(true)
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
                        {formatPrice(product.price)} ₽
                    </ModalPrice>

                    <ActionsWrapper>
                        <ModalButton
                            onClick={handleAddToCart}
                            title={t('addCart')}
                        >
                            {t('buy')}
                        </ModalButton>

                        <ModalButton
                            onClick={handleSetFavorite}
                            disabled={inWishlist}
                            title={t('addFavorite')}
                        >
                            {!inWishlist ? t('addWishlist') : t('inWishlist')}
                        </ModalButton>
                    </ActionsWrapper>
                </PoductInfoWrapper>
            </ModalWrapper>
        </Modal>
    );
};

export default ProductModal;