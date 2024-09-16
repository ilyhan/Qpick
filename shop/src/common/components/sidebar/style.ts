import { clampText, defaultWrapper, disabledColorButton, hoverActiveMove } from "@/common/styles/mixins";
import { borders, colors, fonts, screen, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SideBarWrapper = styled('div')`
    position: sticky;
    top: 13px;
    width: 100%;
    height: 115px;
    padding: 21px 16px 0px 21px;
    ${defaultWrapper}
`;


export const PositionWrapper = styled('div')`
    position: relative;
    width: 350px;

    @media (max-width: ${screen.tabletScreenWidth}) {
        width: 100%;
    } 
`;

export const SideBar = styled('aside')`
    display: flex;
    justify-content: space-between;
`;

export const TotalResult = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    font-weight: ${fonts.weights.semiBold};
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const PaymentButton = styled("button")`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 55px;
    width: inherit;
    height: 65px;
    color: ${colors.white};
    letter-spacing: 0.7px;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.semiBold};
    background-color: ${colors.richBlack};
    border-radius: ${borders.smallRadius};
    box-shadow: ${shadows.defaultShadow};
    ${hoverActiveMove}
    ${disabledColorButton}
`;