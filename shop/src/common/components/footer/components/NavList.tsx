import { 
    NavItem, 
    NavListWrapper, 
    StyledLink
} from "@/common/components/footer/components/style";
import { useTranslation } from "react-i18next";

const NavList = () => {
    const { t } = useTranslation();

    return (
        <NavListWrapper>
            <NavItem>
                <StyledLink to='/qpick/wishlist'>
                    {t('wishlist')}
                </StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to='/qpick/cart'>
                    {t('cart')}
                </StyledLink>
            </NavItem>

            <NavItem>
                <StyledLink to='/qpick/contact'>
                    {t('contact')}
                </StyledLink>
            </NavItem>
        </NavListWrapper>
    )
};

export default NavList;
