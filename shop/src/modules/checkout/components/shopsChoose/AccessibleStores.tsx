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
import { accessibleStores } from "@/store/data/stores";
import { useState } from "react";

const AccessibleStores = () => {
    const [selected, setSelected] = useState('');
    const stores = accessibleStores;

    const handleSelect = (address: string) => {
        setSelected(address);
    };

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
                            $isSelected={selected === store.address}
                            onClick={()=>handleSelect(store.address)}    
                        >
                            {store.address === selected ? "Выбран" : "Выбрать"}
                        </StoreButton>
                    </StoresItem>
                ))}
            </StoresList>

        </StoresWrapper>
    )
};

export default AccessibleStores;