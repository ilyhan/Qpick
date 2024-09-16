import { 
    ConnectWrapper, 
    MessengerBtn, 
    MessengerIcon 
} from "@/common/components/footer/components/style";
import { useTranslation } from "react-i18next";
import vk from "@/common/icons/VK.svg";
import telegram from "@/common/icons/Telegram.svg";
import whatsapp from "@/common/icons/Whatsapp.svg";

const ConnectMessenger = () => {
    const { t } = useTranslation();

    return (
        <ConnectWrapper>
            <MessengerBtn>
                <MessengerIcon src={vk} alt={t('vk')} />
            </MessengerBtn>

            <MessengerBtn>
                <MessengerIcon src={telegram} alt={t('telegram')} />
            </MessengerBtn>

            <MessengerBtn>
                <MessengerIcon src={whatsapp} alt={t('whatsApp')} />
            </MessengerBtn>
        </ConnectWrapper>
    )
};
export default ConnectMessenger;