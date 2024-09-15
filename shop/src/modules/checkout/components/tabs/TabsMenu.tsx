import {
    TabsMenuWrapper,
    TabsList,
    TabItem,
    TabButton
} from "@/modules/checkout/components/tabs/style";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const TabsMenu = () => {
    const selectedTab = useSelector((state: RootState) => state.order.type);
    const { setType } = useActions();

    return (
        <TabsMenuWrapper>
            <TabsList>
                <TabItem>
                    <TabButton
                        onClick={() => setType({ newType: 'Pickup' })}
                        $isSelected={selectedTab === 'Pickup'}
                    >
                        Самовывоз
                    </TabButton>
                </TabItem>

                <TabItem>
                    <TabButton
                        onClick={() => setType({ newType: 'Delivery' })}
                        $isSelected={selectedTab === 'Delivery'}
                    >
                        Доставка
                    </TabButton>
                </TabItem>
            </TabsList>
        </TabsMenuWrapper>
    );
};

export default TabsMenu;