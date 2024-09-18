import ModalConfirm from "@/common/ui/ModalConfirm"
import { useTranslation } from "react-i18next";

interface CheckoutEndProps {
    isOpen: boolean;
    onOk: () => void;
};

const CheckoutEnd = ({ isOpen, onOk }: CheckoutEndProps) => {
    const { t } = useTranslation()

    return (
        <ModalConfirm
            isOpen={isOpen}
            headerText={t('succes')}
            onOk={onOk}
            okText={t('ok')}
        />
    )
};

export default CheckoutEnd;