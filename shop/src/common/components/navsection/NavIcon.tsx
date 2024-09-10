import { NavIconWrapper, NavIconStyle, CountProducts } from "@/common/components/navsection/style";
import { memo } from "react";

interface NavIconProps {
    icon: string;
    link: string;
    alt: string;
    count: number;
};

const NavIcon = memo(({ icon, link, alt, count }: NavIconProps) => {
    return (
        <NavIconWrapper to={link}>
            <NavIconStyle src={icon} alt={alt} />
            {count > 0 && (
                <CountProducts key={count}>
                    {count > 9 ? '9+' : count}
                </CountProducts>
            )}
        </NavIconWrapper>
    );
});

export default NavIcon;