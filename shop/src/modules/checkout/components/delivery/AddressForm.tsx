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
import { useTranslation } from "react-i18next";
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

    const { t } = useTranslation();

    const validateAddress = (val: string) => {
        setErrorAddress({ field: 'errorAddress', error: !val ? 'fillField' : undefined });
    };

    const validate = useDebounce(validateAddress, 300)

    const setAddress = useCallback((val: string) => {
        setFieldAdress({ field: 'address', value: val });
        validate(val);
    }, []);

    const handleChange = useCallback((val: string, field: keyof INewAddress) => {
        setFieldAdress({ field: field, value: val });
    }, []);

    return (
        <AddressWrapper>
            <TitleForm>{t('deliveryAddress')}</TitleForm>

            <DeliveryForm>
                <InputField
                    value={address}
                    onChange={setAddress}
                    label={t('street') + ', ' + t('house')}
                    type="text"
                />
                {errorAddress && <span>{t(errorAddress)}</span>}

                <HomeAddress>
                    <InputField
                        value={flat || ''}
                        onChange={(val) => handleChange(val, 'flat')}
                        label={t('flat')}
                        type="text"
                    />
                    <InputField
                        value={entrance || ''}
                        onChange={(val) => handleChange(val, 'entrance')}
                        label={t('entrance')}
                        type="text"
                    />
                    <InputField
                        value={floor || ''}
                        onChange={(val) => handleChange(val, 'floor')}
                        label={t('floor')}
                        type="text"
                    />
                </HomeAddress>

                <InputField
                    value={comment || ''}
                    onChange={(val) => handleChange(val, 'comment')}
                    label={t('comment')}
                    type="text"
                />
            </DeliveryForm>
        </AddressWrapper>
    )
};

export default AddressForm;