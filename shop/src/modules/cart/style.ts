import { clampText } from "@/common/styles/mixins";
import { colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CartWtapper = styled('section')`
    width: 100%;
    margin-block: 30px 20px;
`;

export const CartTitle = styled('h2')`
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


