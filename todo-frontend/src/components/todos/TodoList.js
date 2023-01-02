import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import NoToDoTitle from "./NoToDosTitle";

const TodoList = (props) => {
  let todos = useSelector(store=>store.todos.todos);

  if(todos.length <1 ){
    return <NoToDoTitle/>
  }

  return (
    <div className="m-2">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
