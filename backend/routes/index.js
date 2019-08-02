const express = require("express");
const router = express.Router();
const { VisitedRestaurants, User } = require("../models");

router.post("/setProfile", (req, res) => {
  console.log(req.body);
});

router.post("/visited", (req, res) => {
  const restaurant = new VisitedRestaurants({
    name: req.body.name,
    id: req.body.id,
    cuisine: req.body.cuisine
  });

  restaurant
    .save()
    .then(response => {
      res.json({ success: true, restaurant: restaurant });
    })
    .catch(error => {
      console.log("saveRestaurant", error);
    });
});

module.exports = function() {
  return router;
};
