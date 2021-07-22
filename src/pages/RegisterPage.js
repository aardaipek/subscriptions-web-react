import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import SignUpCard from "../components/ui-components/login/SignUpCard";

function LoginPage() {
  
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <SignUpCard></SignUpCard>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
