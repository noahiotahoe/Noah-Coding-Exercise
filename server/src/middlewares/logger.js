function logAction(req, res, next) {
  console.log(`Request recieved at ${new Date().toString()}`);
  next();
}

module.exports = {
  logAction,
};
