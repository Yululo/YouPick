const mongoose = require("mongoose");

const visitedRestaurantsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  }
});

const VisitedRestaurants = mongoose.model(
  "VisitedRestaurants",
  visitedRestaurantsSchema
);

module.exports = VisitedRestaurants;
