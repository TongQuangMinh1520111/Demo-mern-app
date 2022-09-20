const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const posts = require("./routers/posts");

const PORT = process.env.port || 5000;
const URI =
"mongodb+srv://admin:RKtR5mnDsIcA0k3v@cluster0.tvuidki.mongodb.net/?retryWrites=true&w=majority"

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" })); //tối đa dung lượng phía client có thể submid lên routers
app.use("/posts", posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
