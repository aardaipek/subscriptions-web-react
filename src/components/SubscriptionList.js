import { Container } from "react-bootstrap";
import Subscription from "./Subscription";

function SubscriptionList(props) {
  return (
    <Container fluid>
      <div>
        {props.subscriptions.map((sub, index) => {
          return <Subscription key={index} sub={sub} />;
        })}
      </div>
    </Container>
  );
}

export default SubscriptionList;
