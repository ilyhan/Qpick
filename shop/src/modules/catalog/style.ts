import { clampText } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CatalogWrapper = styled('div')`
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
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 30px;
    margin-bottom: 28px;

    &:last-child{
        margin-bottom: 0px;
    }

    @media (max-width: 1024px) {
        justify-content: space-around;
    }
`;