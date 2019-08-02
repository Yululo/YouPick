const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.post("/register", (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser
    .save()
    .then(response => {
      res.json({ success: true });
    })
    .catch(error => {
      console.log("saveUser", error);
    });
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) {
      console.log("ERROR is in POST LOGIN", error);
    }
    if (!user) {
      console.log("CANT FIND USER");
    }
    if (user.password === req.body.password) {
      console.log("LOGGED IN");
    }
  });
});

module.exports = router;
