import Card from "@/common/components/productCard/Card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { ProductsWrapper, TitleChapter, ProductsType } from "@/modules/catalog/style";
import { Product } from "@/store/data/data";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface RenderCardsProps {
    openModal: (product: Product) => void;
}

const RenderCards = memo(({ openModal }: RenderCardsProps) => {
    const productes = useSelector((state: RootState) => state.products.products);
    const { t } = useTranslation();

    return (
        <>
            {productes.map((headfones, index) => (
                <ProductsType key={index}>
                    <TitleChapter>{t(headfones.title)}</TitleChapter>

                    <ProductsWrapper>
                        {headfones.productes.map(headfone => (
                            <Card
                                key={headfone.id}
                                cardInfo={headfone}
                                click={() => openModal(headfone)}
                            />
                        ))}
                    </ProductsWrapper>
                </ProductsType>
            ))}

        </>
    )
});

export default RenderCards;