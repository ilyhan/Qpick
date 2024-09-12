import styled from 'styled-components';
import { colors, fonts, transitions } from '@/common/styles/styleConstants';
import { clampText } from '@/common/styles/mixins';

interface InputFieldProps {
    label: string;
    required?: boolean;
    type?: string;
};

const InputWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

const InputStyled = styled('input')`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  color: ${colors.black};
  padding: 13px 10px 5px;
  display: block;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.backgroundGray};

  &:focus {
    outline: none;
  }

  &:focus + label,
  &:valid + label {
    top: -3px;
    font-size: ${fonts.sizes.smallMobile}px;
    color: ${colors.lightGray};
  }
`;

const LabelStyled = styled('label')`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  position: absolute;
  color: ${colors.gray};
  font-weight: normal;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: ${transitions.fastTransition};
`;

const InputField = ({ label, required = true, type = "text" }: InputFieldProps) => {
    return (
        <InputWrapper>
            <InputStyled required={required} type={type} />
            <LabelStyled>{label}</LabelStyled>
        </InputWrapper>
    );
};

export default InputField;