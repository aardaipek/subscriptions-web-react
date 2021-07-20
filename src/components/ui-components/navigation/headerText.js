import styled from "styled-components";
import { primaryTheme } from "../ConstantStyles";

const NavbarBrandText = ({ title, color }) => {
  return <Headline color={color}>{title}</Headline>;
};

const Headline = styled.h3`
  color: ${(props) => props.color || primaryTheme}; ;
`;

export default NavbarBrandText;
