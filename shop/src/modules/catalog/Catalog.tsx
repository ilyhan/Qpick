import { 
    CatalogWrapper,
    TitleChapter,
    ProductsWrapper,
} from "@/modules/catalog/style";
import Card from "@/modules/productCard/Card";

const Catalog = () => {
    return (
        <CatalogWrapper>
            <TitleChapter>Наушники</TitleChapter>
            <ProductsWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ProductsWrapper>

            <TitleChapter>Беспроводные наушники</TitleChapter>
            <ProductsWrapper>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ProductsWrapper>
        </CatalogWrapper>
    );
};

export default Catalog;