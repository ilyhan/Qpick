import Modal from "@/common/ui/modal";
import { 
    ModalWrapper,
    ModalProductsList,
    ModalProductItem,
    ModalProductImg,
    ModalProductTitle,
    ModalProductQuantity,
} from "@/modules/checkout/modal/selectedproducts/style";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface ProductsModalProps {
    isOpen: boolean;
    setOpen: () => void;
};

const ProductsModal = ({ isOpen, setOpen }: ProductsModalProps) => {
    const productsList = useSelector((state: RootState) => state.order.products);

    return (
        <Modal
            isOpen={isOpen}
            onClose={setOpen}
            closeIcon={true}
        >
            <ModalWrapper>
                <ModalProductsList>
                    {productsList.map(product=>(
                        <ModalProductItem>
                            <ModalProductImg src={product.img} alt={product.title}/>
                                <ModalProductTitle>{product.title}</ModalProductTitle>
                                <ModalProductQuantity>{product.quantity} шт.</ModalProductQuantity>
                        </ModalProductItem>
                    ))}
                </ModalProductsList>
            </ModalWrapper>
        </Modal>
    );
};

export default ProductsModal;