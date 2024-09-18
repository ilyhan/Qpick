import {
    PaymentButton,
    PositionWrapper,
    SideBar,
    SideBarWrapper,
    TotalResult
} from "@/common/components/sidebar/style";
import { formatPrice } from "@/common/helpers/formatPrice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface TotalSideBarProps {
    price: number;
    text: string;
    link?: string;
    disabled?: boolean;
    onClick?: () => void;
};

const TotalSideBar = ({ price, text, link, disabled, onClick }: TotalSideBarProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link);
        }
        onClick?.();
    };

    return (
        <PositionWrapper>
            <SideBarWrapper>
                <SideBar>
                    <TotalResult>{t('total')}</TotalResult>
                    <TotalResult>₽ {formatPrice(price)}</TotalResult>
                </SideBar>

                <PaymentButton onClick={handleClick} disabled={disabled}>
                    {text}
                </PaymentButton>
            </SideBarWrapper>
        </PositionWrapper>
    )
};

export default TotalSideBar;