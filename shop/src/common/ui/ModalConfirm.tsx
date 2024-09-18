import { FC } from 'react';
import styled from "styled-components";
import Modal, { ModalProps } from '@/common/ui/modal';
import { clampText, hoverActiveBackground, resetButton } from '@/common/styles/mixins';
import { borders, colors, fonts, screen } from '@/common/styles/styleConstants';

interface ModalConfirmProps extends ModalProps {
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    headerText?: string;
    okText?: string;
    cancelText?: string;
    style?: React.CSSProperties;
};

interface ModalContentProps {
    onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    headerText?: string;
    okText?: string;
    cancelText?: string;
};

const ModalWrapper = styled('div')`
    max-width: 360px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media (max-width: ${screen.lMobileScreenWidthAbove}){
        width: 300px;
    }
`;

const ModalHeader = styled('div')`  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
`;

const OkButton = styled('button')`
    ${resetButton}
    width: 100%;
    padding-block: 15px;
    text-align: center;
    ${hoverActiveBackground}
`;

const CancelButton = styled(OkButton)`
    color: ${colors.deleteColor};
`;

const ButtonInner = styled('div') <{ $hasbuttons: boolean }>`
    display: flex;
    justify-content: ${(props) => (props.$hasbuttons ? 'space-between' : 'center')};
    align-items: center;
    border-top: 1px solid ${colors.backgroundGray};
`;

const Header = styled('h2')`
    text-align: center;
    ${clampText(fonts.sizes.mainMobile, fonts.sizes.titleMobile)};
    font-weight: ${fonts.weights.medium};
    margin: 0;
`;

const ModalContent: FC<ModalContentProps> = ({
    onOk,
    onCancel,
    headerText,
    okText,
    cancelText,
}) => {
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onCancel?.(e);
    };

    const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onOk?.(e);
    };
    return (
        <ModalWrapper>
            <ModalHeader>
                <Header>{headerText}</Header>
            </ModalHeader>

            {(!!okText || !!cancelText) && (
                <ButtonInner $hasbuttons={!!okText && !!cancelText}>
                    {!!okText && (
                        <OkButton key='submit' onClick={handleOk}>
                            {okText}
                        </OkButton>
                    )}
                    {!!cancelText && (
                        <CancelButton key='cancel' onClick={handleCancel}>
                            {cancelText}
                        </CancelButton>
                    )}
                </ButtonInner>
            )}
        </ModalWrapper>
    );
};

const ModalConfirm = (props: ModalConfirmProps) => (
    <Modal {...props}
        styleWrapper={{ alignItems: 'center' }}
        styleContent={{ borderRadius: borders.defaultRadius}}
    >
        <ModalContent
            onOk={props.onOk}
            onCancel={props.onCancel}
            headerText={props.headerText}
            okText={props.okText}
            cancelText={props.cancelText}
        />
    </Modal>
);

export default ModalConfirm;
