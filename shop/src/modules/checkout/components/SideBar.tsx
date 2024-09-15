import TotalSideBar from "@/common/components/sidebar/TotalSideBar";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const SideBar = () => {
    const {
        type,
        pickup,
        products,
    } = useSelector((state: RootState) => state.order);
    const errorsUser = useSelector((state: RootState) => state.user.errors);
    const errorsAddress = useSelector((state: RootState) => state.address.errorAddress);
    console.log('123123')
    const TotalPrice = () => {
        return products.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const {
        clearForm,
        clearCart
    } = useActions();

    const handleBuyAll = () => {
        clearCart();
        clearForm();
    };

    function isValid() {
        const hasErrors = Object.values(errorsUser).some(error => error !== undefined);
        if (hasErrors) {
            return false;
        }
    
        if ((type === 'Delivery' && errorsAddress?.length) || (type === 'Pickup' && !pickup?.length)) {
            return false;
        }
    
        return true;
    };

    return (
        <TotalSideBar
            price={TotalPrice()}
            text="Купить все"
            link="/qpick/catalog"
            onClick={handleBuyAll}
            disabled={!isValid()}
        />
    )
};

export default SideBar;