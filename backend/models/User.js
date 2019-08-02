const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  likedCuisines: {
    type: Array,
    required: false
  },
  priceRange: {
    type: Array,
    required: false
  },
  restrictions: {
    type: Array,
    required: false
  },
  imageUri: {
    type: String,
    required: false
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
