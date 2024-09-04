import Logo from "@/common/components/Logo";
import { NavWrapper, UserActions } from "@/common/components/navsection/style";
import cart from "@/common/icons/cart.svg";
import heart from "@/common/icons/heart.svg";
import NavIcon from "@/common/components/navsection/NavIcon";

const NavSection = () => {
    return (
        <NavWrapper>
            <Logo />
            <UserActions>
                <NavIcon icon={heart} link="/qpick/favorites" alt="Избранное"/>
                <NavIcon icon={cart} link="/qpick/cart" alt="Корзина"/>
            </UserActions>
        </NavWrapper>
    )
};

export default NavSection;