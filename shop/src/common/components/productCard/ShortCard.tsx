import {
    ShortCardWrapper,
    ShortCardImage,
    ShortCardQuantity,
} from "@/common/components/productCard/style";
import { useTranslation } from "react-i18next";

interface ShortCardProps {
    img: string;
    quantity: number;
};

const ShortCard = ({ img, quantity }: ShortCardProps) => {
    const { t } = useTranslation();

    return (
        <ShortCardWrapper>
            <ShortCardImage src={img} alt={t('product')} />

            <ShortCardQuantity>
                x{quantity}
            </ShortCardQuantity>
        </ShortCardWrapper>
    )
};

export default ShortCard;