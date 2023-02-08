const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = 4500;

app.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.listen(port, () => {
  console.log("server run on port " + port);
});
