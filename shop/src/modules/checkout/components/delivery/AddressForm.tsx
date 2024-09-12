import InputField from "@/common/ui/InpitField";
import {
    AddressWrapper,
    DeliveryForm,
    TitleForm,
    HomeAddress
} from "@/modules/checkout/components/delivery/style";

const AddressForm = () => {
    return (
        <AddressWrapper>
            <TitleForm>Адрес доставки</TitleForm>

            <DeliveryForm>
                <InputField label="Улица, дом" type="text" />

                <HomeAddress>
                    <InputField label="Квартира" type="text" />
                    <InputField label="Подъезд" type="text" />
                    <InputField label="Этаж" type="text" />
                </HomeAddress>

                <InputField label="Комментарий (например, наличие лифта)" type="text" />
            </DeliveryForm>
        </AddressWrapper>
    )
};

export default AddressForm;