import { clampText } from "@/common/styles/mixins";
import { colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CheckoutWrapper = styled('section')`
    width: 100%;
    margin-block: 28px 20px;
`;

export const CheckoutInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CheckoutMain = styled('div')`
    display: grid;
    grid-template-columns: auto 350px;
    gap: 50px;
    width: 100%;

    @media (max-width: ${screen.tabletScreenWidth}) {
        display: grid;
        grid-template-columns: minmax(250px, 600px);
        justify-content: center;
        gap: 20px;
    } 
`;

export const CheckoutTitle = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    color: ${colors.darkAngled};
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 13px;
`;