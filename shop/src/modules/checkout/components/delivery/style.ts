import { clampText, sizeWrapper } from "@/common/styles/mixins";
import { fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const AddressWrapper = styled('div')`
    ${sizeWrapper}
`;

export const TitleForm = styled('h3')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 10px;
`;

export const DeliveryForm = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;

export const HomeAddress = styled('div')`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: ${screen.tabletScreenWidth}) {
        flex-direction: column;
        gap: 20px;
    } 
`;