import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import SignInCard from "../components/ui-components/login/LoginCard";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <SignInCard></SignInCard>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
