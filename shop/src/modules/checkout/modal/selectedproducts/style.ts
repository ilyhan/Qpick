import { clampText } from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ModalWrapper = styled('div')`
    width: fit-content;
    padding: 40px 30px;
`;

export const ModalProductsList = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 13px;
    padding-right: 25px;
    max-height: 70vh;
    overflow-y: auto;
`;

export const ModalProductItem = styled('li')`
    display: grid;
    grid-template-columns: 1fr 1fr 40px;
    align-items: center;
    gap: 40px;
`;

export const ModalProductImg = styled('img')`
    width: 130px;
    height: 130px;
    object-fit: contain;
`;

export const ModalProductTitle = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const ModalProductQuantity = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    color: ${colors.gray};
`;