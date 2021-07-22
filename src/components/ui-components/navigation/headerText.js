import styled from "styled-components";
import { fontFamily, brandFontSize, primaryTheme } from "../ConstantStyles";

const NavbarBrandText = ({ title, color }) => {
  return <Headline color={color}>{title}</Headline>;
};

const Headline = styled.p`
  color: ${primaryTheme};
  font-family: ${fontFamily}
  font-size: ${brandFontSize};
  font-weight: bold;

`;

export default NavbarBrandText;
