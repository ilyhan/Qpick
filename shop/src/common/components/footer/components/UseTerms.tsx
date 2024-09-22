import {
    TermsUseWrapper,
    ExhangeLanguage,
    LanguageIcon,
    Language,
    StyledLink,
} from "@/common/components/footer/components/style";
import ru from "@/common/icons/ru.svg";
import { useTranslation } from "react-i18next";

const UseTerms = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <TermsUseWrapper>
            <StyledLink to="https://translated.turbopages.org/proxy_u/en-ru.ru.322648bf-66efcaa7-9f8c9313-74722d776562/https/en.wikipedia.org/wiki/Terms_of_service">
                {t('termsService')}
            </StyledLink>

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
    )
};

export default UseTerms;