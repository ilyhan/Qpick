import {
    HandoverWrapper,
    ObtainingMethod,
    ObtainingInfo,
    InfoItem
} from "@/modules/checkout/components/handover/style";
import TabsMenu from "@/modules/checkout/components/tabs/TabsMenu";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


const Handover = () => {
    const selectedTab = useSelector((state: RootState) => state.order.type);

    return (
        <HandoverWrapper>
            <ObtainingMethod>Способ получения</ObtainingMethod>

            <TabsMenu />

            {selectedTab === 'Pickup' && <ObtainingInfo>
                <InfoItem>Из магазина Qpick</InfoItem>
                <InfoItem>Сегодня и позже - 0 ₽</InfoItem>
            </ObtainingInfo>}

            {selectedTab === 'Delivery' && <ObtainingInfo>
                <InfoItem>Курьером Qpick</InfoItem>
                <InfoItem>Сегодня и позже - от 1299 ₽</InfoItem>
            </ObtainingInfo>}
        </HandoverWrapper>
    );
};

export default Handover;