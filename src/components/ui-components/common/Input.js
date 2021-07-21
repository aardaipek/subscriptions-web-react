import styled, { css } from 'styled-components';
import { fontSize } from '../ConstantStyles';
import { primaryTheme } from '../ConstantStyles';
import { fontFamily } from '../ConstantStyles';

const Input = ({type,placeholder}) => {
    return <CustomInput type={type} placeholder={placeholder}></CustomInput>
}

const CustomInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: ${primaryTheme};
    outline: 0;
  }
`

export default Input;