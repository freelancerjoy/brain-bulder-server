const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Brain Buiders server is Running");
});

app.listen(port, () => {
  console.log(`Brain Builders is runnig port:${port}`);
});
