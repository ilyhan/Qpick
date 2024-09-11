import Modal from "@/common/ui/modal";
import { 
    ModalWrapper,
    ModalProductsList,
    ModalProductItem
} from "@/modules/checkout/modal/selectedproducts/style";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface ProductsModalProps {
    isOpen: boolean;
    setOpen: () => void;
};

const ProductsModal = ({ isOpen, setOpen }: ProductsModalProps) => {
    const productsList = useSelector((state: RootState) => state.cart.products);

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
                            <img src={product.img} height={100}/>
                            <p>{product.title}</p>
                            <p>{product.quantity} шт.</p>
                        </ModalProductItem>
                    ))}
                </ModalProductsList>
            </ModalWrapper>
        </Modal>
    );
};

export default ProductsModal;