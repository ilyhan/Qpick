import {
    TabsMenuWrapper,
    TabsList,
    TabItem,
    TabButton
} from "@/modules/checkout/components/tabs/style";
import { useState } from "react";

interface TabsMenuProps {
    onSwap: (tab: 'Pickup' | 'Delivery') => void;
};

const TabsMenu = ({ onSwap }: TabsMenuProps) => {
    const [selectedTab, setSelectedTab] = useState('Pickup');

    const handleSetTab = (newTab: 'Pickup' | 'Delivery') => {
        setSelectedTab(newTab);
        onSwap(newTab);
    };

    return (
        <TabsMenuWrapper>
            <TabsList>
                <TabItem>
                    <TabButton
                        onClick={() => handleSetTab('Pickup')}
                        $isSelected={selectedTab === 'Pickup'}
                    >
                        Самовывоз
                    </TabButton>
                </TabItem>

                <TabItem>
                    <TabButton
                        onClick={() => handleSetTab('Delivery')}
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