import { Card } from "react-bootstrap";
import FormCard from "./Form";

function LoginCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Login Now!</Card.Title>
        <FormCard></FormCard>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;
