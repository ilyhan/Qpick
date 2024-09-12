import InputField from "@/common/ui/InpitField";
import { 
    UserFormWrapper,
    FormUser,
    TitleForm
} from "@/modules/checkout/components/data/style";

const UserForm = () => {
    return (
        <UserFormWrapper>
            <TitleForm>Покупатель</TitleForm>

            <FormUser>
                <InputField label="Имя" type="text" />
                <InputField label="Фамилия" type="text" />
                <InputField label="Номер телефона" type="tel" />
            </FormUser>
        </UserFormWrapper>
    )
};

export default UserForm;