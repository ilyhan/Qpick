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
import { Link } from "react-router-dom";

const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <FooterWrapper>
            <Logo />

            <NavList>
                <NavItem>
                    <Link to='/qpick/vishflist'>
                        {t('vishflist')}
                    </Link>
                </NavItem>

                <NavItem>
                    <Link to='/qpick/cart'>
                        {t('cart')}
                    </Link>
                </NavItem>

                <NavItem>
                    <Link to='/qpick/contact'>
                        {t('contact')}
                    </Link>
                </NavItem>
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
                    <MessengerIcon src={vk} alt={t('vk')}/>
                </MessengerBtn>

                <MessengerBtn>
                    <MessengerIcon src={telegram} alt={t('telegram')}/>
                </MessengerBtn>

                <MessengerBtn>
                    <MessengerIcon src={whatsapp} alt={t('whatsApp')}/>
                </MessengerBtn>
            </ConnectMessenger>
        </FooterWrapper>
    )
};

export default Footer;