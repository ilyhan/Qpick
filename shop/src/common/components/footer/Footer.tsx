import {
    ConnectMessenger,
    FooterWrapper,
    MessengerIcon,
    NavItem,
    NavList,
    TermsUseWrapper,
    TermsUse,
    ExhangeLanguage,
    LanguageIcon,
    Language,
    MessengerBtn,
} from "@/common/components/footer/style";
import Logo from "@/common/components/Logo";
import vk from "@/common/icons/VK.svg";
import telegram from "@/common/icons/Telegram.svg";
import whatsapp from "@/common/icons/Whatsapp.svg";
import ru from "@/common/icons/ru.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
      i18n.changeLanguage(lng);
    };

    return (
        <FooterWrapper>
            <Logo />

            <NavList>
                <NavItem>{t('vishflist')}</NavItem>
                <NavItem>{t('cart')}</NavItem>
                <NavItem>{t('contact')}</NavItem>
            </NavList>

            <TermsUseWrapper>
                <TermsUse>{t('termsService')}</TermsUse>

                <ExhangeLanguage>
                    <LanguageIcon src={ru} />

                    <Language
                        $isSelected={'ru' === i18n.language}
                        onClick={() => changeLanguage('ru')}
                    >
                        Рус
                    </Language>

                    <Language
                        $isSelected={'en' === i18n.language}
                        onClick={() => changeLanguage('en')}
                    >
                        Eng
                    </Language>
                </ExhangeLanguage>
            </TermsUseWrapper>

            <ConnectMessenger>
                <MessengerBtn>
                    <MessengerIcon src={vk} />
                </MessengerBtn>

                <MessengerBtn>
                    <MessengerIcon src={telegram} />
                </MessengerBtn>

                <MessengerBtn>
                    <MessengerIcon src={whatsapp} />
                </MessengerBtn>
            </ConnectMessenger>
        </FooterWrapper>
    )
};

export default Footer;