import { 
    TermsUseWrapper,
    TermsUse,
    ExhangeLanguage,
    LanguageIcon,
    Language
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
    )
};

export default UseTerms;