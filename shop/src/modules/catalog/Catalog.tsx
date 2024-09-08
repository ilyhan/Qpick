import { HeadphoneCategory, headphones } from "@/data/data";
import {
    CatalogWrapper,
    TitleChapter,
    ProductsWrapper,
} from "@/modules/catalog/style";
import Card from "@/modules/productCard/Card";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Catalog = () => {
    const productes: HeadphoneCategory[] = headphones;
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return (
        <CatalogWrapper>
            {productes.map(headfones => (
                <>
                    <TitleChapter>{t(headfones.title)}</TitleChapter>

                    <ProductsWrapper>
                        {headfones.productes.map(headfone => (
                            <Card
                                key={headfone.id}
                                cardInfo={headfone}
                            />
                        ))}
                    </ProductsWrapper>
                </>
            ))}
        </CatalogWrapper>
    );
};

export default Catalog;