import Logo from "@/common/components/Logo";
import { 
    NavWrapper, 
    UserActions,
    VisuallyHidden
} from "@/common/components/navsection/style";
import cart from "@/common/icons/cart.svg";
import heart from "@/common/icons/heart.svg";
import NavIcon from "@/common/components/navsection/NavIcon";
import { useTranslation } from "react-i18next";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const NavSection = () => {
    const cartCount = useSelector((state: RootState) => state.cart.products.length);
    const wishlistCount = useSelector((state: RootState) => state.products.count);

    const { t } = useTranslation();

    return (
        <NavWrapper>
            <VisuallyHidden>Qpick</VisuallyHidden>
            <Logo />

            <UserActions>
                <NavIcon
                    icon={heart}
                    link="/qpick/wishlist"
                    alt={t('wishlist')}
                    count={wishlistCount}
                />
                <NavIcon
                    icon={cart}
                    link="/qpick/cart"
                    alt={t('cart')}
                    count={cartCount}
                />
            </UserActions>
        </NavWrapper>
    )
};

export default NavSection;