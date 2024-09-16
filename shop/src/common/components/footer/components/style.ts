import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { colors, fonts, screen } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const NavListWrapper = styled('ul')`
    @media (max-width: ${screen.lMobileScreenWidthAbove}) {
        display: none;
    } 
`;

export const NavItem = styled('li')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    margin-bottom: 10px;
`;

export const TermsUseWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 35px;
`;

export const TermsUse = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

export const ExhangeLanguage = styled('div')`
    display: flex;
    gap: 17px;
`;

export const LanguageIcon = styled('img')`
    width: 20px;
    height: 20px;
`;

export const Language = styled('button') <{ $isSelected: boolean }>`
    ${resetButton}
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    font-weight: ${props => props.$isSelected ? fonts.weights.bold : fonts.weights.medium};
    color: ${props => props.$isSelected ? colors.accentColor : colors.richBlack};
    ${hoverActive}
`;

export const ConnectWrapper = styled('div')`
    display: flex;
    column-gap: 18px;

    @media (max-width: ${screen.mobileScreenWidthAbove}) {
        display: none;
    } 
`;

export const MessengerIcon = styled('img')`
    width: 30px;
    height: 30px;
`;

export const MessengerBtn = styled('button')`
    ${resetButton}
    ${hoverActive}
    height: fit-content;
`;