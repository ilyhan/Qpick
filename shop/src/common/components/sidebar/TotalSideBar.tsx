import {
    PaymentButton,
    PositionWrapper,
    SideBar,
    SideBarWrapper,
    TotalResult
} from "@/common/components/sidebar/style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface TotalSideBarProps {
    price: number;
    text: string;
    link?: string;
    onClick?: () => void;
};

const TotalSideBar = ({ price, text, link, onClick }: TotalSideBarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        if(link) {
            navigate(link);
        }
        onClick?.();
    };

    return (
        <PositionWrapper>
            <SideBarWrapper>
                <SideBar>
                    <TotalResult>{t('total')}</TotalResult>
                    <TotalResult>₽ {price}</TotalResult>
                </SideBar>

                <PaymentButton onClick={handleClick}>
                    {text}
                </PaymentButton>
            </SideBarWrapper>
        </PositionWrapper>
    )
};

export default TotalSideBar;