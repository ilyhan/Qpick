import { clampText, hoverActiveMove } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled('section')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
`;

export const UserActions = styled('div')`
    display: flex;
    gap: 45px;
`;

export const NavIconWrapper = styled(Link)`
    position: relative;
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
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.accentColor};
    color: ${colors.white};
    border-radius: ${borders.circle};
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    animation: move 1s;

    @keyframes move {
        0% {
            translate: 0px 0px
        }
        25% {
            translate: 0px 4px
        }
        50% {
            translate: 0px -3px
        }
        75% {
            translate: 0px 2px
        }
        100% {
            translate: 0px 0px;
        }
    }
`;