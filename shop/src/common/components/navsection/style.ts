import { hoverActiveMove, resetLink } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const NavWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    align-items: center;
`;

export const UserActions = styled('div')`
    display: flex;
    gap: 45px;
`;

export const NavIconWrapper = styled('a')`
    position: relative;
    ${resetLink}
    ${hoverActiveMove}
`;

export const NavIconStyle = styled('img')`
    height: 22px;
    width: 22px;
`;

export const CountProducts = styled('span')`
    position: absolute;
    top: -8px;
    right: -10px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.accentColor};
    color: ${colors.white};
    border-radius: ${borders.circle};
    font-size: ${fonts.sizes.small};
`;