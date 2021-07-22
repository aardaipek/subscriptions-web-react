import styled, { css } from "styled-components";
import { primaryTheme } from "../ConstantStyles";
import { headingFontSize } from "../ConstantStyles";

const Heading = ({ text, color,fontSize }) => {
  return <CardHeading color={color} fontSize={fontSize}>{text}</CardHeading>;
};



const CardHeading = styled.p`
  color: ${p => p.color || primaryTheme};
  font-size: ${p => p.fontSize || headingFontSize};
  font-weight: bold;
  text-align: center;
  
`;

export default Heading;