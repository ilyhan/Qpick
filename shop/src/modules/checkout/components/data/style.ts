import { clampText, sizeWrapper } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const UserFormWrapper = styled('div')`
    ${sizeWrapper}
`;

export const TitleForm = styled('h3')`
    ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
    font-weight: ${fonts.weights.semiBold};
    margin-bottom: 10px;
`;

export const FormUser = styled('form')`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
`;