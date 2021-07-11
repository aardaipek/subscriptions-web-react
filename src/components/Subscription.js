import { useState } from "react";
import { Button, ListGroup, Row, Col, Container } from "react-bootstrap";

import SubscriptionDetail from "./SubscriptionDetail";

function Subscription(props) {
  const [isDetailOpen, setOpenDetail] = useState(false);
  const [itemClickCount, setClickCount] = useState(0);


  function openSubDetail() {
    if(itemClickCount > 0){
      setClickCount(0);
      setOpenDetail(false)
    }else{
      setClickCount(1)
      setOpenDetail(true);
    }
  }

  return (
    <div style={layoutStyle}>
      <Container>
        <Row>
          <Col>
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
          </Col>
          <Col md={8}>
            {isDetailOpen ? (
              <SubscriptionDetail record={props.sub}></SubscriptionDetail>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
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
