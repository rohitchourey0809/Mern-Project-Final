const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, res, req, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  //   success(err, res, req, next);

  res.status(err.statusCode).json({ success: false, error: err });
};
