import { Container } from "react-bootstrap";
import Todo from "../components/Todo";


function SubscriptionList(props) {
    console.log(props)
    return (
        <div>
            {props.subscriptions.map((sub,index) => {
                return <Todo key={index} text={sub.title} />
            })}
        </div>
    );
}

export default SubscriptionList;