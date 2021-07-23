import { createGlobalStyle} from "styled-components";
import { fontFamily,inputBorderRadius } from "../ui-components/ConstantStyles";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${fontFamily};
    transition: all 0.50s linear;
  }
  input {
    background: ${({ theme }) => theme.input};
    border-radius:${inputBorderRadius}
  }
  ::placeholder{
    color:${({ theme }) => theme.placeholder};
    padding-left: 10px;
  }
  a{
    color :${({ theme }) => theme.text};
  }
  input:valid{
   color : ${({ theme }) => theme.placeholder};
   padding-left: 10px;
  }
  `;