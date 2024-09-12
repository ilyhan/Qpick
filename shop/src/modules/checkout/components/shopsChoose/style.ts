import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const StoresWrapper = styled('div')`
    width: 100%;
    padding: 20px 25px;
    background-color: ${colors.white};
    border-radius: ${borders.smallRadius};
`;

export const StoresTitle = styled('p')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
`;

export const StoresList = styled('ul')`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 15px;
`;

export const StoresItem = styled('li')`
    border-bottom: 1px solid ${colors.backgroundGray};
    padding-bottom: 10px;

    &:last-child {
        border: none;
    }
`;

export const StoreButton = styled('button') <{ $isSelected: boolean }>`
    ${resetButton}
    padding-block: 10px;
    width: 100px;
    border-radius: ${borders.extraSmallRadius};
    background-color: ${props => props.$isSelected ? colors.richBlack : colors.backgroundGray};
    color: ${props => props.$isSelected ? colors.white : colors.black};
    transition: ${transitions.mediumTransition};
    ${hoverActive}
`;

export const StoreInfo = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 10px;
`;

export const LocationWrapper = styled('div')`
`;

export const MallTitle = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.semiBold};
    color: ${colors.darkAngled};
`;

export const Adress = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const TimeWork = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    color: ${colors.gray};
`;
