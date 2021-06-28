import { Container, Col, Row, Card } from "react-bootstrap";
import FormCard from "../components/Form";

function Login() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{marginTop:15}}>
            <Card.Body>
              <Card.Title>Login Now!</Card.Title>
              <FormCard></FormCard>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Login;
