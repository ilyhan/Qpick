import Logo from "@/common/components/Logo";
import { NavWrapper, UserActions } from "@/common/components/navsection/style";
import cart from "@/common/icons/cart.svg";
import heart from "@/common/icons/heart.svg";
import NavIcon from "@/common/components/navsection/NavIcon";
import { useTranslation } from "react-i18next";

const NavSection = () => {
    const {t} = useTranslation();

    return (
        <NavWrapper>
            <Logo />
            <UserActions>
                <NavIcon icon={heart} link="/qpick/favorites" alt={t('vishflist')}/>
                <NavIcon icon={cart} link="/qpick/cart" alt={t('cart')}/>
            </UserActions>
        </NavWrapper>
    )
};

export default NavSection;