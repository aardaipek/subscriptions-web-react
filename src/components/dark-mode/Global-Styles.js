import { createGlobalStyle} from "styled-components";
import { fontFamily } from "../ui-components/ConstantStyles";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${fontFamily};
    transition: all 0.50s linear;
  }
  `