require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
    res.status(200).send("Engine Started, Ready to take off!");
})

app.use("/auth", authRoutes);
app.use("/user", userRoutes);


app.listen(port, () => {                                           //Inititating server
    console.log(`Here we go, Engines started at ${port}.`);
  })