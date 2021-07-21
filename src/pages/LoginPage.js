import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row, Card } from "react-bootstrap";
import FormCard from "../components/Form";
import CustomCard from "../components/ui-components/common/Card";
import CustomButton from "../components/ui-components/common/Button";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  function tryLogin(token) {
    setIsLoggedIn(true);
  }

  return (
    <Container>
      <Row>
        <Col>
          <CustomCard></CustomCard>
        </Col>
        <Col>
          <Card style={cardStyle}>
            {!isLoggedIn && (
              <NavLink
                style={registerTextStyle}
                to="/register"
                className="text-right text-primary"
              >
                Register Here <span>➡️</span>
              </NavLink>
            )}
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Login
              </Card.Title>
              <FormCard login={tryLogin}></FormCard>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

const registerTextStyle = {
  fontSize: "12px",
  cursor: "pointer",
};
const cardStyle = {
  marginTop: "15px",
  borderRadius: "40px",
};

export default Login;
