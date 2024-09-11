import { clampText, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const TabsMenuWrapper = styled('div')`
    width: 100%;
`;

export const TabsList = styled('ul')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${colors.backgroundGray};
    border-radius: ${borders.extraSmallRadius};
`;

export const TabItem = styled('li')`

`;

export const TabButton = styled('button') <{ $isSelected: boolean }>`
    ${resetButton}
    width: 100%;
    height: 44px;
    background-color: ${props => props.$isSelected ? colors.richBlack : colors.backgroundGray};
    color: ${props => props.$isSelected ? colors.white : colors.black};
    border-radius: ${borders.extraSmallRadius};
    transition: ${transitions.mediumTransition};
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;