import { defaultWrapper } from "@/common/styles/mixins";
import styled from "styled-components";

export const FooterWrapper = styled('section')`
    ${defaultWrapper}
    display: flex;
    justify-content: space-between;
    height: 150px;
    width: 100%;
    padding: 30px 27px 0px 30px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
`;
