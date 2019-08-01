const express = require("express");
const app = express();
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const dbRoutes = require("./routes/databaseAccess.js");

app.use(bodyParser.json());

//need to require db routes

app.use("/db", dbRoutes);

if (!process.env.MONGODB_URI) {
  throw new Error(
    "MONGODB_URI is not in the environmental variables. Try running 'source env.sh'"
  );
}

mongoose.connection.on("connected", function() {
  console.log("Success: connected to MongoDb!");
});

mongoose.connection.on("error", function() {
  console.log("Error connecting to MongoDb. Check MONGODB_URI in env.sh");
  process.exit(1);
});
mongoose.connect(process.env.MONGODB_URI);

app.listen(3000, () => {
  console.log("Server for YouPick listening on port 3000!");
});
