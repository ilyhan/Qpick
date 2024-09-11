import {
    HandoverWrapper,
    ObtainingMethod,
    ObtainingInfo,
    InfoItem
} from "@/modules/checkout/components/handover/style";
import TabsMenu from "@/modules/checkout/components/tabs/TabsMenu";

interface HandoverProps {
    selectedTab: 'Pickup' | 'Delivery';
    onSwap: (tab: 'Pickup' | 'Delivery') => void;
};

const Handover = ({ selectedTab, onSwap }: HandoverProps) => {
    return (
        <HandoverWrapper>
            <ObtainingMethod>Способ получения</ObtainingMethod>

            <TabsMenu onSwap={onSwap} />

            {selectedTab === 'Pickup' && <ObtainingInfo>
                <InfoItem>Из магазина Qpick</InfoItem>
                <InfoItem>Сегодня и позже - 0 ₽</InfoItem>
            </ObtainingInfo>}

            {selectedTab === 'Delivery' &&<ObtainingInfo>
                <InfoItem>Курьером Qpick</InfoItem>
                <InfoItem>Сегодня и позже - от 1299 ₽</InfoItem>
            </ObtainingInfo>}
        </HandoverWrapper>
    );
};

export default Handover;