import React from "react";
import styled, { css } from "styled-components";

import CardContainer from "../card/CardContainer";
import CustomButton from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import Link from "./Link";

const SignUpCard = () => (
  <CardWrapper>
    <CardHeaderWrapper>
      <Heading text="Sign Up"></Heading>
    </CardHeaderWrapper>
    <CardBody>
      <CardFieldWrapper>
        <Input type="text" placeholder="Username"></Input>
      </CardFieldWrapper>

      <CardFieldWrapper>
        <Input type="text" placeholder="E-Mail"></Input>
      </CardFieldWrapper>

      <CardFieldWrapper>
        <Input type="password" placeholder="Password"></Input>
      </CardFieldWrapper>

      <CardFieldWrapper>
        <CustomButton text="Sign Up" type="button"></CustomButton>
      </CardFieldWrapper>

      <CardFieldWrapper>
        <Link text="I have already an account"></Link>
      </CardFieldWrapper>
    </CardBody>
  </CardWrapper>
);

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const CardHeaderWrapper = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldWrapper = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export default SignUpCard;
