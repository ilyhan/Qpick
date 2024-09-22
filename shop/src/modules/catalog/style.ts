import { clampText } from "@/common/styles/mixins";
import { colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CatalogWrapper = styled('section')`
    width: 100%;
    margin-block: 28px 20px;
`;

export const TitleChapter = styled('h2')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    color: ${colors.gray};
    margin-bottom: 20px;
`;

export const ProductsWrapper = styled('div')`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 30px;
    justify-content: space-around;

    @media (max-width: ${screen.tabletScreenWidth}) {
        grid-template-columns: repeat(2, minmax(200px, 330px));
        gap: 23px;
    } 

    @media (max-width: ${screen.lMobileScreenWidthAbove}) {
        grid-template-columns: repeat(1, minmax(200px, 310px));
        gap: 18px;
    } 
`;

export const ProductsType = styled('div')`
    margin-bottom: 28px;

    &:last-child{
        margin-bottom: 0px;
    }
`;
