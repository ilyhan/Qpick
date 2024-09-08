import { NavIconWrapper, NavIconStyle, CountProducts } from "@/common/components/navsection/style";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

interface NavIconProps {
    icon: string;
    link: string;
    alt: string;
};

const NavIcon = ({ icon, link, alt }: NavIconProps) => {
    const itemCount = useSelector((state: RootState) => state.cart.products.length);
    
    return (
        <NavIconWrapper to={link}>
            <NavIconStyle src={icon} alt={alt} />
            {itemCount > 0 && (
                <CountProducts key={itemCount}>
                    {itemCount > 9 ? '9+' : itemCount}
                </CountProducts>
            )}
        </NavIconWrapper>
    );
};

export default NavIcon;