import heartActive from "@/common/icons/heartActive.svg";
import { hoverActiveMove, resetButton } from "@/common/styles/mixins";
import { useActions } from "@/store/actions";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FavoriteButton = styled('button')`
    ${resetButton}
    position: absolute;
    top: 25px;
    right: 25px;
    ${hoverActiveMove}
    z-index: 5;
`;

const FavoriteIcon = styled('img')`
`;

interface FavoriteProps {
    id: number;
};

const Favorite = ({ id }: FavoriteProps) => {
    const { deleteFromWishlist } = useActions();

    const { t } = useTranslation();

    const handleSetFavorite = () => {
        deleteFromWishlist({ id: id })
    };

    return (
        <FavoriteButton
            onClick={handleSetFavorite}
            title={t('deleteIcon')}
        >
            <FavoriteIcon src={heartActive} />
        </FavoriteButton>
    )
};

export default Favorite;