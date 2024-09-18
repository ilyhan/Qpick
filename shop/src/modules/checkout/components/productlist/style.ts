import { clampText, hoverActive, resetButton, sizeWrapper } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
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
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;

export const ProductItem = styled('li')`
    width: fit-content;
`;

export const ProductButton = styled('button')`
    ${resetButton}
    ${hoverActive}
`;