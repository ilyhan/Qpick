import { clampText } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const UserFormWrapper = styled('div')`
    width: 100%;
    padding: 20px 25px;
    background-color: ${colors.white};
    border-radius: ${borders.smallRadius};
`;

export const TitleForm = styled('p')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
`;

export const FormUser = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;