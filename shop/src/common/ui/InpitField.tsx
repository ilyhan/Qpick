import styled from 'styled-components';
import { colors, fonts, transitions } from '@/common/styles/styleConstants';
import { clampText } from '@/common/styles/mixins';
import { memo } from 'react';

interface InputFieldProps {
    label: string;
    value: string;
    required?: boolean;
    type?: string;
    maxLength?: number;
    onChange: (value: string)=>void;
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
  border-bottom: 2px solid ${colors.backgroundGray};

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

const InputField = memo(({
    label,
    value,
    type = "text",
    required = true,
    maxLength,
    onChange,
}: InputFieldProps) => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <InputWrapper>
            <InputStyled
                type={type}
                value={value}
                required={required}
                onChange={onInputChange}
                maxLength={maxLength}
            />
            <LabelStyled>{label}</LabelStyled>
        </InputWrapper>
    );
});

export default InputField;