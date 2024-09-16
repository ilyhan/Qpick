import { clampText, sizeWrapper } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const HandoverWrapper = styled('div')`
    ${sizeWrapper}
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ObtainingMethod = styled('h3')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
`;

export const ObtainingInfo = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    width: 100%;
    padding: 20px 20px;
    border: 2px solid ${colors.richBlack};
    border-radius: ${borders.extraSmallRadius};
`;

export const InfoItem = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
`;