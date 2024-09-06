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
import { useState } from "react";

const Footer = () => {
    const [lang, setLeng] = useState('ru');

    const changeLang = (newLang: string) => {
        setLeng(newLang);
    };

    return (
        <FooterWrapper>
            <Logo />

            <NavList>
                <NavItem>Избранное</NavItem>
                <NavItem>Корзина</NavItem>
                <NavItem>Контакты</NavItem>
            </NavList>

            <TermsUseWrapper>
                <TermsUse>Условия сервиса</TermsUse>

                <ExhangeLanguage>
                    <LanguageIcon src={ru} />

                    <Language
                        $isSelected={lang === 'ru'}
                        onClick={() => changeLang('ru')}
                    >
                        Рус
                    </Language>

                    <Language
                        $isSelected={lang === 'eng'}
                        onClick={() => changeLang('eng')}
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