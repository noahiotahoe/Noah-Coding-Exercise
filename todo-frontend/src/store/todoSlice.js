import { createSlice } from "@reduxjs/toolkit";

const TODOS = [
  {
      id:Math.random(),
      title: "Sample Value",
      complete:false
  },
];

const TODO_SLICE = createSlice({
  name: "todos",
  initialState: {
    todos: TODOS
  },
  reducers: {
    addToDo: (state, action) => {
      state.todos.push(action.payload.toDoItem);
    },
    removeToDo: (state, action) => {
      let id = action.payload.id;
      state.todos=state.todos.filter((todo) => todo.id !== id);
    },
    updateToDo: (state, action) => {
      let updatableTODOIndex=state.todos.findIndex(i=>i.id===action.payload.item.id)
      state.todos[updatableTODOIndex]=action.payload.item
    },
    markAsDone: (state, action) => {
      let updatableTODOIndex=state.todos.findIndex(i=>i.id===action.payload.id)
      state.todos[updatableTODOIndex].complete=true
    },
    toggleToDoComplete:(state,action)=>{
      let updatableTODOIndex=state.todos.findIndex(i=>i.id===action.payload.id)
      state.todos[updatableTODOIndex].complete=!state.todos[updatableTODOIndex].complete
    }
  },
});

export const {addToDo,removeToDo,updateToDo,markAsDone,toggleToDoComplete}=TODO_SLICE.actions;

export default TODO_SLICE.reducer;
