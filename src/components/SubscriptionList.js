import { Container } from "react-bootstrap";
import Todo from "../components/Todo";

function SubscriptionList(props) {
  return (
    <Container fluid>
      <div>
        {props.subscriptions.map((sub, index) => {
          return <Todo key={index} sub={sub} />;
        })}
      </div>
    </Container>
  );
}

export default SubscriptionList;
