const express = require("express");
const app = express();
var session = require("express-session");

const sessionExpress = (handler) => {
  console.log("the middleware entere");
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
    })
  );
  return async (req, res) => {
    req.session["user"] = "test";
    console.log("the uese in session", req.session.user);

    return handler(req, res);
  };
};

export default sessionExpress;
