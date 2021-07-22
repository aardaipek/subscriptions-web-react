import {ListGroup, Row, Col,Card, Container } from "react-bootstrap";
import Button from "../ui-components/common/Button";

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
          <Button bg="tertiary" bold="none" color="light" text="Update"></Button>
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
