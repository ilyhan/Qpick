import { NavIconWrapper, NavIconStyle, CountProducts } from "@/common/components/navsection/style";

interface NavIconProps {
    icon: string;
    link: string;
    alt: string;
};

const NavIcon = ({ icon, link, alt}: NavIconProps) => {
    const itemCount = 1;

    return (
        <NavIconWrapper to={link}>
            <NavIconStyle src={icon} alt={alt}/>
            {itemCount > 0 && (
                <CountProducts>
                    {itemCount}
                </CountProducts>
            )}
        </NavIconWrapper>
    );
};

export default NavIcon;