import {
    StoresItem,
    StoreButton,
    StoreInfo,
    LocationWrapper,
    MallTitle,
    Adress,
    TimeWork
} from "@/modules/checkout/components/shopsChoose/style";
import { useActions } from "@/store/actions";
import { IAccessibleStores } from "@/store/data/stores";
import { useTranslation } from "react-i18next";

interface StoreItemProps {
    store: IAccessibleStores;
    isSelected: boolean;
};

const StoreItem = ({ store, isSelected }: StoreItemProps) => {
    const { setStore } = useActions();
    const { t } = useTranslation();

    return (
        <StoresItem>
            <StoreInfo>
                <LocationWrapper>
                    <MallTitle>{store.mall}</MallTitle>

                    <Adress>{store.address}</Adress>
                </LocationWrapper>

                <TimeWork>{store.dataWork}: {store.openHours}</TimeWork>
            </StoreInfo>

            <StoreButton
                $isSelected={isSelected}
                onClick={() => setStore({ storeAddress: store.address })}
            >
                {isSelected ? t('selected') : t('select')}
            </StoreButton>
        </StoresItem>
    );
};

export default StoreItem;