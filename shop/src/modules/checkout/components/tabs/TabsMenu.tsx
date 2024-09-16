import {
    TabsMenuWrapper,
    TabsList,
    TabItem,
    TabButton
} from "@/modules/checkout/components/tabs/style";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const TabsMenu = () => {
    const selectedTab = useSelector((state: RootState) => state.order.type);
    const { t } = useTranslation();

    const { setType } = useActions();

    return (
        <TabsMenuWrapper>
            <TabsList>
                <TabItem>
                    <TabButton
                        onClick={() => setType({ newType: 'Pickup' })}
                        $isSelected={selectedTab === 'Pickup'}
                    >
                        {t('pickup')}
                    </TabButton>
                </TabItem>

                <TabItem>
                    <TabButton
                        onClick={() => setType({ newType: 'Delivery' })}
                        $isSelected={selectedTab === 'Delivery'}
                    >
                        {t('delivery')}
                    </TabButton>
                </TabItem>
            </TabsList>
        </TabsMenuWrapper>
    );
};

export default TabsMenu;