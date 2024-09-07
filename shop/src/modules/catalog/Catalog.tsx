import { HeadphoneCategory, headphones } from "@/data/data";
import {
    CatalogWrapper,
    TitleChapter,
    ProductsWrapper,
} from "@/modules/catalog/style";
import Card from "@/modules/productCard/Card";

const Catalog = () => {
    const productes: HeadphoneCategory[] = headphones;

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