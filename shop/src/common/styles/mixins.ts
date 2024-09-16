import { css } from "styled-components";
import { borders, colors, screen, shadows, transitions } from "@/common/styles/styleConstants";

export const clampText = (min: number, max: number) => css`
  font-size: clamp(
    ${min}px,
    ${(max / screen.fullScreenWidth) * 100}vw,
    ${max}px
  );
`;

export const defaultWrapper = css`
  background-color: ${colors.white};
  border-radius: ${borders.defaultRadius};
  box-shadow: ${shadows.defaultShadow};
`;

export const sizeWrapper = css`
  width: 100%;
  padding: 20px 25px;
  ${defaultWrapper}
`;

export const resetButton = css`
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const resetLink = css`
  color: inherit;
  text-decoration: none;
`;

export const hoverActive = css`
  @media (hover: hover) {
    transition: ${transitions.fastTransition};
    &:hover {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.65;
    }
  }

  @media (hover: none) {
    &:active {
      opacity: 0.5;
    }
  }
`;

export const hoverActiveBackground = css`
  @media (hover: hover) {
    transition: ${transitions.fastTransition};
    &:hover {
      background-color: ${colors.backgroundGray};
    }

    &:active {
      background-color: ${colors.lightGray};
    }
  }
`;

export const hoverActiveMove = css`
  @media (hover: hover) {
    transition: ${transitions.fastTransition};
    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 0.55;
      translate: 0px 1px;
    }
  }

  @media (hover: none) {
    &:active {
      opacity: 0.5;
    }
  }
`;

export const disabledButton = css`
  &:disabled{
    cursor: default;
    &:hover, &:active{
      opacity: 1;
      translate: 0;
    }
  }
`;

export const disabledColorButton = css`
  &:disabled{
    cursor: default;
    background-color: ${colors.gray};
    border: none;
    &:hover, &:active{
      opacity: 1;
      translate: 0;
    }
  }
`;