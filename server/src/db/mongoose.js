const mongoose = require("mongoose");

const DB_NAME = "TODOS-DB";

const CONNECTION_STRING = "mongodb://localhost:27017/" + DB_NAME;

mongoose.connect(
  CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  }
);
