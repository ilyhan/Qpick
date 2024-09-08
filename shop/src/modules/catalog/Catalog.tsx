import { HeadphoneCategory, headphones } from "@/data/data";
import {
    CatalogWrapper,
    TitleChapter,
    ProductsWrapper,
} from "@/modules/catalog/style";
import Card from "@/modules/productCard/Card";
import { useEffect } from "react";

const Catalog = () => {
    const productes: HeadphoneCategory[] = headphones;

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
                    <TitleChapter>{headfones.title}</TitleChapter>

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