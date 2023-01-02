import TodoList from "./components/todos/TodoList";
import NewToDoForm from "./components/NewToDoForm";

import Container from "./components/UI/Container";
import Navbar from "./components/UI/Navbar";

import appStyles from './App.css';

function App() {
  return (
    <Container>
      <Navbar />
      <NewToDoForm />
      <TodoList/>
    </Container>
  );
}

export default App;
