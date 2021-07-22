import { Container } from "react-bootstrap";
import Subscription from "./Subscription";

function SubscriptionList(props) {
  return (
    <Container fluid style={layoutStyle}>
      <div>
        {props.subscriptions.map((sub, index) => {
          return <Subscription detail = {props.detail} key={index} sub={sub} />;
        })}
      </div>
    </Container>
  );
}

const layoutStyle = {
  marginTop:'48px'
}

export default SubscriptionList;
