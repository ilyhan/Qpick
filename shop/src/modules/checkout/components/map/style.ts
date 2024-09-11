import { clampText, hoverActive, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const Wrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 20px 25px;
    background-color: ${colors.white};
    border-radius: ${borders.smallRadius};
`;

export const MapTitle = styled('p')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 15px;
`;

export const MapWrapper = styled('div')`
    width: 100%;
    height: 200px;
    border-radius: ${borders.smallRadius};
    overflow: hidden;
`;

export const MapImage = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MapButtonWrapper = styled('div')`
    position: absolute;
    left: 50%;
    bottom: 40%;
    transform: translate(-50%, 50%);
    background-color: ${colors.gray};
    border-radius: ${borders.extraSmallRadius};
    overflow: hidden;
`;

export const ButtonMap = styled('button')`
    ${resetButton}
    padding: 10px 20px;
    color: ${colors.black};
    background-color: ${colors.backgroundGray};
    ${hoverActive}
`;