import { useDebounce } from "@/common/hooks/useDebiunce";
import InputField from "@/common/ui/InpitField";
import {
    AddressWrapper,
    DeliveryForm,
    TitleForm,
    HomeAddress
} from "@/modules/checkout/components/delivery/style";
import { useActions } from "@/store/actions";
import { IAddress } from "@/store/reducers/order/address";
import { RootState } from "@/store/store";
import { useCallback } from "react";
import { useSelector } from "react-redux";

type INewAddress = Omit<IAddress, 'errorAddres'>;

const AddressForm = () => {
    const {
        address,
        flat,
        entrance,
        floor,
        comment,
        errorAddress,
    } = useSelector((state: RootState) => state.address);

    const {
        setFieldAdress,
        setErrorAddress
    } = useActions();

    const validateAddress = (val: string) => {
        setErrorAddress({ field: 'errorAddress', error: !val ? 'Заполните это поле' : undefined });
    };

    const validate = useDebounce(validateAddress, 300)

    const setAddress = useCallback((val: string) => {
        setFieldAdress({ field: 'address', value: val });
        validate(val);
    }, []);

    //таким образом не работет memo в инпутах
    const handleChange = useCallback((val: string, field: keyof INewAddress) => {
        setFieldAdress({ field: field, value: val });
    }, []);

    // const handleChangeEntrance = useCallback((val: string) => {
    //     setFieldAdress({ field: 'entrance', value: val });
    // }, []);

    // const handleChangeFloor = useCallback((val: string) => {
    //     setFieldAdress({ field: 'floor', value: val });
    // }, []);

    // const handleChangeComment = useCallback((val: string) => {
    //     setFieldAdress({ field: 'comment', value: val });
    // }, []);

    return (
        <AddressWrapper>
            <TitleForm>Адрес доставки</TitleForm>

            <DeliveryForm>
                <InputField
                    value={address}
                    onChange={setAddress}
                    label="Улица, дом*"
                    type="text"
                />
                {errorAddress && <span>{errorAddress}</span>}

                <HomeAddress>
                    <InputField
                        value={flat || ''}
                        onChange={(val) => handleChange(val, 'flat')}
                        label="Квартира"
                        type="text"
                    />
                    <InputField
                        value={entrance || ''}
                        onChange={(val) => handleChange(val, 'entrance')}
                        label="Подъезд"
                        type="text"
                    />
                    <InputField
                        value={floor || ''}
                        onChange={(val) => handleChange(val, 'floor')}
                        label="Этаж"
                        type="text"
                    />
                </HomeAddress>

                <InputField
                    value={comment || ''}
                    onChange={(val)=>handleChange(val, 'comment')}
                    label="Комментарий (например, наличие лифта)"
                    type="text"
                />
            </DeliveryForm>
        </AddressWrapper>
    )
};

export default AddressForm;