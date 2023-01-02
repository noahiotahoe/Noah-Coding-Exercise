const mongoose = require("mongoose");
const express = require("express");
const Todo = require("../models/todos");

const todosRouter = new express.Router();

// get all todos
todosRouter.get("/todos", async (req, res) => {
  try {
    let responseObj = {};
    const todos = await Todo.find();
    if (!todos) {
      res.sendStatus(404);
    }
    //res.send(todos);
    responseObj.total = todos.length;
    responseObj.records = todos;
    res.send(responseObj);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

// get a single todo
todosRouter.get("/todos/:id", async (req, res) => {
  try {
    //console.log(req.params.id);
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.sendStatus(404);
    }
    //res.send(todos);
    res.send({ message: "operation success", record: todo });
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

// delete all todos
todosRouter.delete("/todos/delete/all", async (req, res) => {
  try {
    const todos = await Todo.deleteMany({});
    if (!todos) {
      res.sendStatus(400);
    }
    let responseObj = {};
    responseObj.message =
      todos.deletedCount > 0
        ? "Deleted all todos succesfully"
        : "No Todos found to delete";
    responseObj.total = todos.deletedCount;
    res.send(responseObj);
  } catch (e) {
    res.status(400);
    res.send({ error: e });
  }
});

// delete a todo
todosRouter.delete("/todos/delete/:id", async (req, res) => {
  try {
    let todoId = req.params.id;
    const todo = await Todo.findByIdAndDelete(todoId);
    //console.log(todo);
    if (!todo) {
      res.sendStatus(400);
    }
    //res.send(todo);
    res.send({ message: "Deleted Todo Succesfully" });
    //console.log(todoId);
  } catch (e) {
    //console.log(e);
    res.sendStatus(400);
  }
});

// update a todo
todosRouter.patch("/todos/update/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "complete"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).send();
    }
    updates.forEach((update) => (todo[update] = req.body[update]));
    await todo.save();
    res.send({ message: "Todo updated succesfully", record: todo });
  } catch (e) {
    res.status(400).send({
      error: {
        message: e.name,
      },
    });
  }
});

module.exports = todosRouter;
