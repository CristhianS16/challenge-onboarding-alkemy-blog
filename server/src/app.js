require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db.js");
const app = express();

// Connect to database
db.authenticate()
  .then(() => console.log("DB is connected"))
  .catch((error) => console.error(error));

const port = process.env.PORT || "4000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./api/posts"));

app.listen(port, () => {
  console.log("Server on port: ", port);
});
