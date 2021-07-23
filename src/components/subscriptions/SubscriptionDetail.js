import styled, { css } from "styled-components";

import Button from "../ui-components/common/Button";
import Heading from "../ui-components/common/Heading";
import { fontFamily } from "../ui-components/ConstantStyles";

function SubscriptionDetail(props) {
  return (
    <CardWrapper>
      <CardHeaderWrapper>
        <Heading fontSize="20px" text={props.record.title}></Heading>
      </CardHeaderWrapper>
      <CardBody>
        <CardFieldWrapper>
          <Heading fontSize="15px" text={props.record.payCycle}></Heading>
        </CardFieldWrapper>

        <CardFieldWrapper>
          <Heading fontSize="15px" text={props.record.type}></Heading>
        </CardFieldWrapper>

        <CardFieldWrapper>
          <Heading fontSize="15px" text={props.record.currency}></Heading>
        </CardFieldWrapper>

        <CardFieldWrapper>
          <Heading fontSize="15px" text={props.record.total}></Heading>
        </CardFieldWrapper>

        <CardFieldWrapper>
          <Button bg="tertiary" bold="none" color="light" text="Update"></Button>
        </CardFieldWrapper>
      </CardBody>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 400px;
  font-family: ${fontFamily};
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

export default SubscriptionDetail;
