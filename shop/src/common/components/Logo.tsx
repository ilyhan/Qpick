import { clampText, hoverActive } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled('div')`
    ${clampText(fonts.sizes.logoMobile, fonts.sizes.logo)}
    font-weight: ${fonts.weights.bold};
    ${hoverActive}
`

const Logo = () => {
    return (
        <Link to='/qpick'>
            <StyledLogo>QPICK</StyledLogo>
        </Link>
    )
};

export default Logo;