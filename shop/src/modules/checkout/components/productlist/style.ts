import { clampText, hoverActive, resetButton, sizeWrapper } from "@/common/styles/mixins";
import { fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProductListWrapper = styled('div')`
    ${sizeWrapper}
`;

export const ProductListTitle = styled('p')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 15px;
`;

export const ListProduct = styled('ul')`
    display: grid;
    grid-template-columns: repeat(7, 80px);
    gap: 10px;
    justify-content: center;

    @media (max-width: ${screen.tabletScreenWidth}){
        grid-template-columns: repeat(6, 80px);
    }

    @media (max-width: ${screen.mobileScreenWidth}) {
        grid-template-columns: repeat(4, 80px);
    }

    @media (max-width: ${screen.lMobileScreenWidth}) {
        grid-template-columns: repeat(3, 80px);
    }
`;

export const ProductItem = styled('li')`
    width: fit-content;
`;

export const ProductButton = styled('button')`
    ${resetButton}
    ${hoverActive}
`;