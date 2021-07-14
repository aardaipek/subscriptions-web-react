import { useState } from "react";
import { Button, ListGroup, Row, Col, Container } from "react-bootstrap";

function Subscription(props) {
  function openSubDetail() {
    props.detail(props.sub);
  }

  return (
    <div style={layoutStyle}>
      <Container>
        <ListGroup as="ul">
          <ListGroup.Item
            action
            style={listItemStyle}
            as="li"
            onClick={openSubDetail}
          >
            {props.sub.title}
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
}

const layoutStyle = {
  marginTop: "10px",
};
const listStyle = {};
const listItemStyle = {
  cursor: "pointer",
};

export default Subscription;
