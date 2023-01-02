const mongoose = require("mongoose");

const setUpDefaultDB = async () => {
  await todo1.save();
  await todo2.save();
  await todo3.save();
  await todo4.save();
};

setUpDefaultDB();

//module.exports=setUpDefaultDB;
