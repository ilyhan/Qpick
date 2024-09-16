import { clampText, sizeWrapper } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const UserFormWrapper = styled('div')`
    ${sizeWrapper}
`;

export const TitleForm = styled('h3')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
`;

export const FormUser = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;