import {
    Wrapper,
    MapTitle,
    MapWrapper,
    MapImage,
    MapButtonWrapper,
    ButtonMap
} from "@/modules/checkout/components/map/style";
import map from "@/store/data/images/map.jpg";

const MapButton = () => {
    return (
        <Wrapper>
            <MapTitle>Адрес магазина</MapTitle>
            <MapWrapper>
                <MapImage src={map} alt="Карта" />
            </MapWrapper>

            <MapButtonWrapper>
                <ButtonMap>
                    Выбрать магазин
                </ButtonMap>
            </MapButtonWrapper>
        </Wrapper>
    );
};

export default MapButton;