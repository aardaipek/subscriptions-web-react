import styled, { css } from "styled-components";
import { fontFamily } from "../ConstantStyles";

const CardContainer = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: ${fontFamily}
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

export default CardContainer;