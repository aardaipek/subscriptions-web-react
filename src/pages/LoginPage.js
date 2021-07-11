import { Container, Col, Row, Card } from "react-bootstrap";
import FormCard from "../components/Form";

function Login() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title className="text-center text-primary">Login</Card.Title>
              <FormCard></FormCard>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

const cardStyle= {
  'marginTop':'15px',
  "borderRadius":"40px"
}

export default Login;
