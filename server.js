const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes.index')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};
// Define API routes here
app.use(routes);
// connect to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user:password1@ds035310.mlab.com:35310/heroku_mmkdvd75",
  { useNewUrlParser: true }
 
);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
