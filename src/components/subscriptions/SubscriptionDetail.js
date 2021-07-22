import { Button, ListGroup, Row, Col,Card, Container } from "react-bootstrap";

function SubscriptionDetail(props) {

  return (
    <Container style={layoutStyle}>
      <Card style={cardStyle}>
        <Card.Header className="text-center" as="h5">{props.record.title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.record.payCycle}</Card.Title>
          <Card.Text>{props.record.type}</Card.Text>
          <Card.Text>{props.record.currency == "usd" ? '💲' : "tl"}</Card.Text>
          <Card.Text>{props.record.total}</Card.Text>
          <Button variant="info">Update</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

const layoutStyle = {
  marginTop: "48px",
};
const cardStyle= {
  borderRadius: "10px"
}

export default SubscriptionDetail;
