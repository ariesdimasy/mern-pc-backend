const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routers");
const session = require("express-session");

dotenv.config();

app.set("trust proxy", 1); // trust first proxy
var sess = {
  name: `userlogin`,
  secret: "some-secret-example",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 * 10, // 1 min
  },
};

app.use(session(sess));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

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
