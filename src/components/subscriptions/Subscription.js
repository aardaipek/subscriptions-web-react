import { useState } from "react";
import { Container } from "react-bootstrap";
import SubList from "../ui-components/subscriptions/SubList";
import SubItem from "../ui-components/subscriptions/SubItem";

function Subscription(props) {

  function openSubDetail() {
    props.detail(props.sub);
  }

  return (
    <div>
      <Container>
        <SubList text={props.sub.title} color={props.sub.color} clickEvent={openSubDetail}></SubList>
      </Container>
    </div>
  );
}



export default Subscription;
