import styled, { css } from "styled-components";
import {
  primaryTheme,
  primaryTheme2,
  primaryTheme3,
  primaryTheme4,
  white,
  black,
  roundButtonRadius,
  buttonBorderRadius,
  fontFamily,
  fontSize
} from "../ConstantStyles";

const Button = ({ text, bg, color, shape, bold }) => {
  return <CustomButton shape={shape} bg={bg} bold={bold} color={color}>{text}</CustomButton>;
};

const CustomButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  border: 0;
  border-radius: ${buttonBorderRadius};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  ${({ bg }) => bg == "primary" &&`
    background-color: ${primaryTheme};
  `}
  ${({ bg }) => bg == "secondary" &&`
    background-color: ${primaryTheme2};
  `}
  ${({ bg }) => bg == "tertiary" &&`
    background-color: ${primaryTheme3};
  `}
  ${({ color }) => color == "light" &&`
    color: ${white};
  `}
  ${({ color }) => color == "dark" &&`
    color: ${black};
  `}
  ${({ shape }) => shape == "round" &&`
    border-radius: ${roundButtonRadius};
  `}
  ${({ bold }) => bold == "none" &&`
    font-weight: 400;
  `}
  ${({ bold }) => bold == "bold" &&`
    font-weight: 700;
  `}

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export default Button;
