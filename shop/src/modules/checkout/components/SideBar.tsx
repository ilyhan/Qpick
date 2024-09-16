import TotalSideBar from "@/common/components/sidebar/TotalSideBar";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SideBar = memo(() => {
    const {
        type,
        pickup,
        products,
    } = useSelector((state: RootState) => state.order);
    const errorsUser = useSelector((state: RootState) => state.user.errors);
    const errorsAddress = useSelector((state: RootState) => state.address.isValid);
    const { t } = useTranslation();

    const TotalPrice = () => {
        return products.reduce((total, item) =>
            total + item.price * item.quantity,
            type === 'Pickup' ? 1299 : 0
        );
    };

    const {
        clearFormUser,
        clearForm,
        clearCart,
        clearAddress,
    } = useActions();

    const handleBuyAll = () => {
        clearCart();
        clearForm();
        clearFormUser();
        clearAddress();
    };

    function isValid() {
        const hasErrors = Object.values(errorsUser).some(error => error !== undefined);
        if (hasErrors) {
            return false;
        }

        if ((type === 'Delivery' && !errorsAddress) || (type === 'Pickup' && !pickup?.length)) {
            return false;
        }

        return true;
    };

    return (
        <TotalSideBar
            price={TotalPrice()}
            text={t('buyAll')}
            link="/qpick/catalog"
            onClick={handleBuyAll}
            disabled={!isValid()}
        />
    )
});

export default SideBar;