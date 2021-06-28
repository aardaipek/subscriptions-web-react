import Todo from "../components/Todo";
import { Container} from 'react-bootstrap';

function TodoPage() {
  return (
    <Container fluid>
      <h1>My Todos</h1>
      <Todo text="ARDA" />
      <Todo text="Test" />
    </Container>
  );
}

export default TodoPage;
