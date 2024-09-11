import {
    ShortCardWrapper,
    ShortCardImage,
    ShortCardQuantity,
} from "@/common/components/productCard/style";

interface ShortCardProps {
    img: string;
    quantity: number;
};

const ShortCard = ({ img, quantity }: ShortCardProps) => {
    return (
        <ShortCardWrapper>
            <ShortCardImage src={img} alt="Товар" />

            <ShortCardQuantity>
                x{quantity}
            </ShortCardQuantity>
        </ShortCardWrapper>
    )
};

export default ShortCard;