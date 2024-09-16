import { Link } from "react-router-dom";
import { NavItem, NavListWrapper } from "@/common/components/footer/components/style";
import { useTranslation } from "react-i18next";

const NavList = () => {
    const { t } = useTranslation();

    return (
        <NavListWrapper>
            <NavItem>
                <Link to='/qpick/wishlist'>
                    {t('wishlist')}
                </Link>
            </NavItem>

            <NavItem>
                <Link to='/qpick/cart'>
                    {t('cart')}
                </Link>
            </NavItem>

            <NavItem>
                <Link to='/qpick/contact'>
                    {t('contact')}
                </Link>
            </NavItem>
        </NavListWrapper>
    )
};

export default NavList;
