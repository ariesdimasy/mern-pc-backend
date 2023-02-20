const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routers");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 4500;

app.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.use("/category", routes.categoryRoute);
app.use("/product", routes.productRoute);
app.use("/user", routes.userRoute);
app.use("/comment", routes.commentRoute);

app.listen(port, () => {
  console.log("server run on port " + port);
});
