import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { fontSize } from "../ConstantStyles";
import { primaryTheme } from "../ConstantStyles";

const Link = ({ text, color, to }) => {
  return (
    <NavLink to={to}>
      <CustomLink color={color}>{text}</CustomLink>
    </NavLink>
  );
};

const CustomLink = styled.a`
  display: inline-block;
  font-size: ${fontSize};
  text-decoration: none;
  color: #777;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: ${(p) => p.color || primaryTheme};
    text-decoration: underline;
  }
`;

export default Link;
