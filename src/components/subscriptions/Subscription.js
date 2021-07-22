import { useState } from "react";
import { Container } from "react-bootstrap";
import SubList from "../ui-components/common/SubList";
import SubItem from "../ui-components/common/SubItem";

function Subscription(props) {

  function openSubDetail() {
    props.detail(props.sub);
  }

  return (
    <div >
      <Container>
        <SubList text={props.sub.title} clickEvent={openSubDetail}></SubList>
      </Container>
    </div>
  );
}



export default Subscription;
