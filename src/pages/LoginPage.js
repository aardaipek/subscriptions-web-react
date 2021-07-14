import { useState } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import FormCard from "../components/Form";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");


  function tryLogin(token){
    setIsLoggedIn(true);
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={cardStyle}>
            {!isLoggedIn && <span style={registerTextStyle} className="text-right text-primary">Register Here <span>➡️</span></span>}
            <Card.Body>
              <Card.Title className="text-center text-primary">Login</Card.Title>
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
  fontSize:'12px',
  cursor:'pointer'
}
const cardStyle= {
  'marginTop':'15px',
  "borderRadius":"40px"
}

export default Login;
