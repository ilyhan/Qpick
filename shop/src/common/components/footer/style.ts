import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, screen, shadows } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const FooterWrapper = styled('section')`
    display: flex;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    padding: 30px 27px 0px 30px;
    background-color: ${colors.white};
    border-top-right-radius: ${borders.defaultRadius};
    border-top-left-radius: ${borders.defaultRadius};
    box-shadow: ${shadows.defaultShadow};
`;

export const ConnectMessenger = styled('div')`
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

export const NavList = styled('ul')`
`;

export const NavItem = styled('li')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    margin-bottom: 10px;
`;

export const TermsUseWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media (max-width: ${screen.lMobileScreenWidthAbove}) {
        display: none;
    } 
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