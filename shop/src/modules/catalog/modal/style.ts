import { clampText, disabledButton, hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalWrapper = styled('div')`
    display: grid;
    grid-template-columns: minmax(180px, 220px) auto;
    gap: 40px;
    width: 700px;
    height: fit-content;
    padding: 55px 40px 40px;

    @media (max-width: ${screen.mobileScreenWidth}){
        display: flex;
        flex-direction: column;
        width: 420px;
        gap: 20px;
        padding: 40px 30px 30px;
    }

    @media (max-width: ${screen.lMobileScreenWidthAbove}){
        width: 100%;
        gap: 15px;
        padding: 40px 20px 20px;
    }
`;

export const ProductImage = styled('img')`
    width: 100%;
    height: auto;
    align-self: center;

    @media (max-width: ${screen.mobileScreenWidth}){
        width: 60%;
    }
`;

export const PoductInfoWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: center;
`;

export const ModalTitle = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    color: ${colors.darkAngled};
    margin-bottom: 5px;
`;

export const ModalDescription = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const ModalPrice = styled('p')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    color: ${colors.accentColor};
`;

export const ModalButton = styled('button')`
    ${resetButton}
    font-weight: ${fonts.weights.semiBold};
    ${hoverActiveMove}
    ${disabledButton}
`;

export const ActionsWrapper = styled('div')`
    display: flex;
    gap: 20px;
`;
