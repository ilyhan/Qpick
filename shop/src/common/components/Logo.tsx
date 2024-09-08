import { hoverActive } from "@/common/styles/mixins";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "@/common/icons/logo.svg";

const StyledLogo = styled('img')`
    ${hoverActive}
`;

const Logo = () => {
    return (
        <Link to='/qpick/catalog'>
            <StyledLogo src={logo} alt='Логотип'/>
        </Link>
    )
};

export default Logo;