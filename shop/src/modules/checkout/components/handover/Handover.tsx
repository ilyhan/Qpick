import {
    HandoverWrapper,
    ObtainingMethod,
    ObtainingInfo,
    InfoItem
} from "@/modules/checkout/components/handover/style";
import TabsMenu from "@/modules/checkout/components/tabs/TabsMenu";
import { RootState } from "@/store/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Handover = () => {
    const selectedTab = useSelector((state: RootState) => state.order.type);
    const { t } = useTranslation();
    return (
        <HandoverWrapper>
            <ObtainingMethod>{t('obtaining')}</ObtainingMethod>

            <TabsMenu />

            {selectedTab === 'Pickup' && <ObtainingInfo>
                <InfoItem>{t('fromQpick')}</InfoItem>
                <InfoItem>{t('todayLater')} - 0 ₽</InfoItem>
            </ObtainingInfo>}

            {selectedTab === 'Delivery' && <ObtainingInfo>
                <InfoItem>{t('courier')}</InfoItem>
                <InfoItem>{t('todayLater')} - 1299 ₽</InfoItem>
            </ObtainingInfo>}
        </HandoverWrapper>
    );
};

export default Handover;