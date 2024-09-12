import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProductListWrapper = styled('div')`
    width: 100%;
    padding: 20px 25px;
    background-color: ${colors.white};
    border-radius: ${borders.smallRadius};
`;

export const ProductListTitle = styled('p')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 15px;
`;

export const ListProduct = styled('ul')`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const ProductItem = styled('li')`

`;

export const ProductButton = styled('button')`
    ${resetButton}
    ${hoverActive}
`;