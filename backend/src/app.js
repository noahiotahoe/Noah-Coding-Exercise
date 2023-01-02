require("./db/mongoose");
const express = require("express");

const app = express();

//middlewares
const logAction = require("./middlewares/logger");

//routers
const todosRouter = require("./routers/todoRouter");

app.use(express.json());
app.use(todosRouter);

module.exports = app;
