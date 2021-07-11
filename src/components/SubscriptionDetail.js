import { Button, ListGroup, Row, Col,Card, Container } from "react-bootstrap";

function SubscriptionDetail(props) {
  return (
    <Container>
      <Card>
        <Card.Header as="h5">{props.record.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.record.payCycle}</Card.Title>
          <Card.Text>{props.record.type}</Card.Text>
          <Card.Text>{props.record.currency}</Card.Text>
          <Card.Text>{props.record.total}</Card.Text>
          <Button variant="info">Edit</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SubscriptionDetail;
