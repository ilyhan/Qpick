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

interface ProductModalProps {
    isOpen: boolean;
    setOpen: () => void;
    product: Product | null;
};

const ProductModal = ({ isOpen, setOpen, product }: ProductModalProps) => {
    if (!product) {
        return null;
    };

    const {t} = useTranslation();

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
                        <ModalButton>
                            Купить
                        </ModalButton>

                        <ModalButton>
                            В избранное
                        </ModalButton>
                    </ActionsWrapper>
                </PoductInfoWrapper>
            </ModalWrapper>
        </Modal>
    );
};

export default ProductModal;