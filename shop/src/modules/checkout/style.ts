import { clampText } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
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
`;

export const CheckoutTitle = styled('h1')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    color: ${colors.darkAngled};
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 13px;
`;