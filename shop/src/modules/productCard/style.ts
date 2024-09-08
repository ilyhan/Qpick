import { clampText, hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { borders, colors, fonts, screen, shadows, transitions } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const CardWrapper = styled('button')`
    ${resetButton}
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 407px;
    padding: 15px 20px 25px;
    background-color: ${colors.white};
    border-radius: ${borders.defaultRadius};
    box-shadow: ${shadows.defaultShadow};
    transition: ${transitions.mediumTransition};

    &:hover {
        translate: 0px -5px;
    }

    
    @media (max-width: ${screen.tabletScreenWidthAbove}) {
        height: 380px;
        padding: 12px 17px 20px;
    } 

    @media (max-width: ${screen.mobileScreenWidthAbove}) {
        height: 365px;
        padding: 10px 17px 17px;
    } 

    @media (max-width: ${screen.lMobileScreenWidthAbove}) {
        height: 350px;
        padding: 10px 17px 17px;
    } 
`;

export const ImageWrapper = styled('div')`
    display: flex;
    align-items: center;
    height: 240px;
    width: 100%;

    @media (max-width: ${screen.tabletScreenWidthAbove}) {
        height: 220px;
    } 

    @media (max-width:  ${screen.mobileScreenWidthAbove}) {
        height: 200px;
    } 
`;

export const ProductImage = styled('img')`
    margin: 0 auto;
`;

export const InfoWrapper = styled('div')`
    display: grid;
    grid-template-columns: 3fr 1fr;
    row-gap: 25px;
    margin-top: 50px;
    width: 100%;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.semiBold};
`;

export const ProductTitle = styled('span')`
    color: ${colors.darkAngled};
    justify-self: start;
`;

export const ProductPrice = styled('span')`
    color: ${colors.accentColor};
    justify-self: end;
`;

export const ProductRatingWrapper = styled('div')`
    display: flex;
    column-gap: 10px;
`;

export const ProductRating = styled('span')`
    color: ${colors.gray};
    align-self: end;
`;

export const RatingStar = styled('img')`
    height: 23px;
    width: 23px;
`;

export const ProductAction = styled('button')`
    ${resetButton}
    ${hoverActiveMove}
    justify-self: end;
`;

export const CartCardWrapper = styled('div') <{ $isDelete: boolean }>`
    height: 218px;
    width: 100%;
    background-color: ${colors.white};
    box-shadow: ${shadows.defaultShadow};
    border-radius: ${borders.defaultRadius};
    padding: 18px 28px 15px 18px;
    margin-top: 13px;

    transition: all 0.3s ease;
    opacity: ${props => props.$isDelete ? '0' : '1'};
    transform: ${props => props.$isDelete ? 'translateY(-10px)' : 'translateY(0)'};
`;

export const CartProductImg = styled('img')`
    width: 146px;
    height: 136px;
`;

export const CartProductTitle = styled('span')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.medium};
    color: ${colors.darkAngled};
`;

export const CartProductPrice = styled('span')`
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
    font-weight: ${fonts.weights.semiBold};
    color: ${colors.lightGray};
`;

export const TotalProductPrice = styled(CartProductPrice)`
    color: ${colors.darkAngled};
`;

export const QuantityButton = styled('button')`
    ${resetButton}
    height: 30px;
    aspect-ratio: 1;
    background-color: ${colors.lightAccentColor};
    border-radius: ${borders.circle};
    color: ${colors.white};
    font-size: 20px;
    ${hoverActiveMove}

    &:disabled{
        cursor: default;
        &:hover{
            opacity: 1;
            translate: 0;
        }
    }
`;

export const DeleteProductButton = styled('button')`
    ${resetButton}
    height: fit-content;
    ${hoverActiveMove}
`;

export const DeleteIcon = styled('img')`
    height: 17px;
    width: 20px;
`;

export const CartProductInfo = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-self: center;
    padding-top: 35px;
`;

export const CartCardInfo = styled('div')`
    display: grid;
    grid-template-columns: minmax(120px, 146px) auto 20px;
    gap: 23px;
`;

export const TotalProductWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`;

export const QuantityProductWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    margin-left: 14px;

    @media (max-width:  ${screen.lMobileScreenWidthAbove}) {
        margin-left: 0px;
    } 
`;

export const QuantityProduct = styled('div')`
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
    font-weight: ${fonts.weights.semiBold};
`;