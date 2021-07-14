import { Form, Button, Col } from "react-bootstrap";

function FormCard(props) {

  function tryLogin(){
    props.login("true");
  }

  return (
    <Form className="">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="text-monospace">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="text-monospace">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Col className="text-center">
        <Button onClick={tryLogin} className="" variant="primary">
          Try Login
        </Button>
      </Col>
    </Form>
  );
}

export default FormCard;
