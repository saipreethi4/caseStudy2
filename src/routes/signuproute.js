const express = require("express");
const signupRouter = express.Router();
// const user = require("../data/user");
const userdata = require("../model/UserModel");

signupRouter.get("/", function (req, res) {
  res.render("signup", {});
});

signupRouter.get("/adduser", function (req, res) {
  var newuser = {
    uid: req.query.uid, // part#2 point 10
    pwd: req.query.pwd,
  };
  console.log(newuser);
  // user.push(newuser);

  // console.log(user);
  // res.redirect("/login");
  const user = new userdata(newuser);
  user.save();
  res.redirect("/login");
});

module.exports = signupRouter;
