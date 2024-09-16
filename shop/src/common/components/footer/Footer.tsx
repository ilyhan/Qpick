import {
    FooterWrapper,
} from "@/common/components/footer/style";
import Logo from "@/common/components/Logo";
import NavList from "@/common/components/footer/components/NavList";
import UseTerms from "@/common/components/footer/components/UseTerms";
import ConnectMessenger from "@/common/components/footer/components/ConnectMessenger";

const Footer = () => {
    return (
        <FooterWrapper>
            <Logo />

            <NavList />

            <UseTerms />

            <ConnectMessenger />
        </FooterWrapper>
    )
};

export default Footer;