import { clampText, hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, shadows, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CartWtapper = styled('section')`
    width: 100%;
    margin-block: 30px 20px;
`;

export const CartTitle = styled('h1')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    color: ${colors.darkAngled};
    font-weight: ${fonts.weights.semiBold};
`;

export const CartOrdersWrapper = styled('div')`
    display: grid;
    grid-template-columns: 633px auto;
    justify-content: space-between;

    @media (max-width: ${screen.tabletScreenWidth}) {
        display: grid;
        grid-template-columns: minmax(250px, 600px);
        justify-content: center;
        gap: 20px;
    } 
`;

export const CartList = styled('ul')`
    display: flex;
    flex-direction: column;
`;

export const SideBarWrapper = styled('div')`
    position: sticky;
    top: 13px;
    width: 100%;
    height: 115px;
    padding: 21px 16px 0px 21px;
    background-color: ${colors.white};
    border-radius: ${borders.defaultRadius};
    box-shadow: ${shadows.defaultShadow};
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
    ${hoverActiveMove}
`;