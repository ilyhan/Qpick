import { useActions } from "@/store/actions";
import ModalConfirm from "@/common/ui/ModalConfirm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ContinueShop = () => {
    const order = useSelector((state: RootState) => state.order.products);
    const [isOpen, setIsOpen] = useState<boolean>(!!order?.length);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const {
        clearForm,
        clearFormUser,
        clearAddress
    } = useActions();

    const onOk = () => {
        setIsOpen(false);
        navigate('/qpick/checkout');
    };

    const onCancel = () => {
        setIsOpen(false);
        clearForm();
        clearFormUser();
        clearAddress();
    };
    return (
        <ModalConfirm
            isOpen={isOpen}
            headerText={t('continue')}
            okText={t('yes')}
            cancelText={t('no')}
            onOk={onOk}
            onCancel={onCancel}
        />
    )
};

export default ContinueShop;