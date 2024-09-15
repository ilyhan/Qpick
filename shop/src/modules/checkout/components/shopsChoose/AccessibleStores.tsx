import {
    StoresWrapper,
    StoresTitle,
    StoresList,
    StoresItem,
    StoreButton,
    MallTitle,
    Adress,
    TimeWork,
    StoreInfo,
    LocationWrapper
} from "@/modules/checkout/components/shopsChoose/style";
import { useActions } from "@/store/actions";
import { accessibleStores } from "@/store/data/stores";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const AccessibleStores = () => {
    const storeSelected = useSelector((state: RootState) => state.order.pickup);
    const stores = accessibleStores;

    const { setStore } = useActions();

    return (
        <StoresWrapper>
            <StoresTitle>Выбор магазина</StoresTitle>

            <StoresList>
                {stores.map(store => (
                    <StoresItem>
                        <StoreInfo>
                            <LocationWrapper>
                                <MallTitle>
                                    {store.mall}
                                </MallTitle>

                                <Adress>
                                    {store.address}
                                </Adress>
                            </LocationWrapper>

                            <TimeWork>
                                {store.dataWork}: {store.openHours}
                            </TimeWork>
                        </StoreInfo>

                        <StoreButton
                            $isSelected={storeSelected === store.address}
                            onClick={() => setStore({ storeAddress: store.address })}
                        >
                            {store.address === storeSelected ? "Выбран" : "Выбрать"}
                        </StoreButton>
                    </StoresItem>
                ))}
            </StoresList>

        </StoresWrapper>
    )
};

export default AccessibleStores;