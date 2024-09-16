import {
    StoresWrapper,
    StoresTitle,
    StoresList,
} from "@/modules/checkout/components/shopsChoose/style";
import { accessibleStores } from "@/store/data/stores";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import StoreItem from "@/modules/checkout/components/shopsChoose/StoreItem";
import { useTranslation } from "react-i18next";

const AccessibleStores = () => {
    const storeSelected = useSelector((state: RootState) => state.order.pickup);
    const { t } = useTranslation();

    const stores = accessibleStores;

    return (
        <StoresWrapper>
            <StoresTitle>{t('chooseStore')}</StoresTitle>

            <StoresList>
                {stores.map(store => (
                    <StoreItem
                        key={store.id}
                        store={store}
                        isSelected={storeSelected === store.address}
                    />
                ))}
            </StoresList>

        </StoresWrapper>
    )
};

export default AccessibleStores;