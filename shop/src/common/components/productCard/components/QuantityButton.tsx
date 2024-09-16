import { disabledButton, hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const QuantityBtn = styled('button')`
    ${resetButton}
    height: 30px;
    aspect-ratio: 1;
    background-color: ${colors.lightAccentColor};
    border-radius: ${borders.circle};
    color: ${colors.white};
    font-size: 20px;
    ${hoverActiveMove}
    ${disabledButton}
`;

const Icon = styled('img')`
    margin: 0 auto;  
`;

interface QuantityButtonProps {
    id: number;
    max: number;
    change: number;
    quantity: number;
    icon: string;
    title: string;
};

const QuantityButton = ({ id, max, change, quantity, icon, title }: QuantityButtonProps) => {
    const { setQuantity } = useActions();

    const {t} = useTranslation();

    return (
        <QuantityBtn
            onClick={() => setQuantity({ id: id, change: change })}
            disabled={quantity === max}
            title={t(title)}
        >
            <Icon src={icon} />
        </QuantityBtn>
    )
};

export default QuantityButton;