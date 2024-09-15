import { useDebounce } from "@/common/hooks/useDebiunce";
import InputField from "@/common/ui/InpitField";
import {
    UserFormWrapper,
    FormUser,
    TitleForm
} from "@/modules/checkout/components/data/style";
import { useActions } from "@/store/actions";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const UserForm = () => {
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

    const validateFirst = (val: string) => {
        setErrors({ field: 'firstName', error: !val ? 'Имя обязательно' : undefined });
    };

    const validateLast = (val: string) => {
        setErrors({ field: 'lastName', error: !val ? 'Фамилия обязательна' : undefined });
    };

    const validatePhoneNumber = (val: string) => {
        if (!val) {
            setErrors({ field: 'phoneNumber', error: 'Номер телефона обязателен' });
        } else if (!/^\+?\d{10,15}$/.test(val)) {
            setErrors({ field: 'phoneNumber', error: 'Неверный формат номера телефона' });
        } else {
            setErrors({ field: 'phoneNumber', error: undefined });
        }
    };

    const validateName = useDebounce(validateFirst, 500);
    const validateLastName = useDebounce(validateLast, 500);
    const validatePhone = useDebounce(validatePhoneNumber, 500);

    const setFirstName = (val: string) => {
        setField({ field: 'firstName', value: val });
        validateName(val);
    };

    const setLastName = (val: string) => {
        setField({ field: 'lastName', value: val });
        validateLastName(val);
    };

    const setPhoneNumber = (val: string) => {
        setField({ field: 'phoneNumber', value: val });
        validatePhone(val);
    };

    return (
        <UserFormWrapper>
            <TitleForm>Покупатель</TitleForm>

            <FormUser>
                <InputField
                    value={firstName}
                    onChange={setFirstName}
                    label="Имя*"
                    type="text"
                />
                {errors.firstName && <p>{errors.firstName}</p>}

                <InputField
                    value={lastName}
                    onChange={setLastName}
                    label="Фамилия*"
                    type="text"
                />
                {errors.lastName && <p>{errors.lastName}</p>}

                <InputField
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    label="Номер телефона*"
                    type="tel"
                    maxLength={12}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </FormUser>
        </UserFormWrapper>
    );
};

export default UserForm;
