import {
    ConnectList,
    MessengerLink,
    MessengerIcon,
    Navitem
} from "@/common/components/footer/components/style";
import { useTranslation } from "react-i18next";
import vk from "@/common/icons/VK.svg";
import telegram from "@/common/icons/Telegram.svg";
import whatsapp from "@/common/icons/Whatsapp.svg";

const ConnectMessenger = () => {
    const { t } = useTranslation();

    return (
        <ConnectList>
            <Navitem>
                <MessengerLink to='https://vk.com/neoflex_ru'>
                    <MessengerIcon src={vk} alt={t('vk')} />
                </MessengerLink>
            </Navitem>

            <Navitem>
                <MessengerLink to='https://t.me/neoflexcareers'>
                    <MessengerIcon src={telegram} alt={t('telegram')} />
                </MessengerLink>
            </Navitem>

            <Navitem>
                <MessengerLink to='https://www.whatsapp.com/?ysclid=m1btdqbkq4290303481'>
                    <MessengerIcon src={whatsapp} alt={t('whatsApp')} />
                </MessengerLink>
            </Navitem>
        </ConnectList>
    )
};
export default ConnectMessenger;