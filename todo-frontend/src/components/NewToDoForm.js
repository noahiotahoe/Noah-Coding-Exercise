import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../store/todoSlice";

const NewToDoForm = (props) => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({
    title: "",
  });
  const [formValid, setFormValid] = useState(false);

  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUserInput(
      {
        [name]:value,
      }
    )
    value.match(/^\s+$|^$/)?setFormValid(false):setFormValid(true)
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    //dispatch({ type: "ADDTODO", payload: userInput.title,complete:false });
    let todo={
      id:Math.random().toString(),
      title:userInput.title,
      complete:false
    }
    dispatch(addToDo({toDoItem:todo}))
    setUserInput({
      title: "",
    });
    //console.table(todo);
    setFormValid(null);
  };

  return (
    <div className="mt-5 mb-5">
      <form onSubmit={formSubmitHandler}>
        <div className="row m-2">
          <div className="col">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type here"
                name="title"
                id="newToDoTitle"
                value={userInput.title}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={!formValid}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewToDoForm;
