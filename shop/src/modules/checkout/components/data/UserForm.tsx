import { useDebounce } from "@/common/hooks/useDebiunce";
import InputField from "@/common/ui/InpitField";
import {
    UserFormWrapper,
    FormUser,
    TitleForm
} from "@/modules/checkout/components/data/style";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const UserForm = memo(() => {
    const {
        firstName,
        lastName,
        phoneNumber,
        errors
    } = useSelector((state: RootState) => state.user);

    const {
        setField,
        setErrors
    } = useActions();

    const { t } = useTranslation();

    const validateFirst = (val: string) => {
        setErrors({ field: 'firstName', error: !val ? 'nameReq' : undefined });
    };

    const validateLast = (val: string) => {
        setErrors({ field: 'lastName', error: !val ? 'lastReq' : undefined });
    };

    const validatePhoneNumber = (val: string) => {
        if (!val) {
            setErrors({ field: 'phoneNumber', error: 'phoneReq' });
        } else if (!/^\+?\d{10,15}$/.test(val)) {
            setErrors({ field: 'phoneNumber', error: 'phoneFormat' });
        } else {
            setErrors({ field: 'phoneNumber', error: undefined });
        }
    };

    const validateName = useDebounce(validateFirst, 500);
    const validateLastName = useDebounce(validateLast, 500);
    const validatePhone = useDebounce(validatePhoneNumber, 500);

    const setFirstName = useCallback((val: string) => {
        setField({ field: 'firstName', value: val });
        validateName(val);
    }, []);

    const setLastName = useCallback((val: string) => {
        setField({ field: 'lastName', value: val });
        validateLastName(val);
    }, []);

    const setPhoneNumber = useCallback((val: string) => {
        setField({ field: 'phoneNumber', value: val });
        validatePhone(val);
    }, []);

    return (
        <UserFormWrapper>
            <TitleForm>{t('buyer')}</TitleForm>

            <FormUser>
                <InputField
                    value={firstName}
                    onChange={setFirstName}
                    label={t('name')}
                    type="text"
                />
                {errors.firstName && <p>{t(errors.firstName)}</p>}

                <InputField
                    value={lastName}
                    onChange={setLastName}
                    label={t('last')}
                    type="text"
                />
                {errors.lastName && <p>{t(errors.lastName)}</p>}

                <InputField
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    label={t('phone')}
                    type="tel"
                    maxLength={12}
                />
                {errors.phoneNumber && <p>{t(errors.phoneNumber)}</p>}
            </FormUser>
        </UserFormWrapper>
    );
});

export default UserForm;
