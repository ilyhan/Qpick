import { clampText, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CartWtapper = styled('div')`
    width: 100%;
    margin-block: 30px 20px;
`;

export const CartTitle = styled('h1')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    color: ${colors.darkAngled};
    font-weight: ${fonts.weights.semiBold};
`;

export const CartOrdersWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
`;

export const CartList = styled('ul')`
    display: flex;
    flex-direction: column;
`;

export const SideBarWrapper = styled('div')`
    position: sticky;
    top: 13px;
    width: 350px;
    height: 115px;
    padding: 21px 16px 0px 21px;
    background-color: ${colors.white};
    border-radius: ${borders.defaultRadius};
    box-shadow: ${shadows.defaultShadow};
`;

export const SideBar = styled('div')`
    display: flex;
    justify-content: space-between;
`;

export const TotalResult = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    font-weight: ${fonts.weights.semiBold};
    letter-spacing: 0.5px;
`;

export const PaymentButton = styled('button')`
    ${resetButton}
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
`;