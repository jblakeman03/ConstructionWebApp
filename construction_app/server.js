const express = require("express");
const bodyParser = require("body-parser");
const dbOperation = require("./database/dbOperation");
const cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", function (req, res) {
  console.log("called to get");
  res.json({ result: "Helo" });
});

app.post("/createCustomer", async (req, res) => {
  console.log("called to set customer");
  const customer = {
    first: "Cole",
    last: "Blakeman",
    email: "coleblakeman4@gmail.com",
    pass: "123",
    verifyPass: "123",
    street: "1234",
    city: "murray",
    state: "KY",
    zip: "40419",
  };

  await dbOperation.createCustomer(req.body);
});

app.post("/getLogin", async (req, res) => {
  console.log("called test");
  const result = await dbOperation.getLogin(req.body);
  res.json(result.recordset);
});

app.post("/test", async (req, res) => {
  console.log("called test");
  const result = await dbOperation.getTest();
  // console.log(result);
});

app.post("/add", async (req, res) => {
  console.log("called test");
  await dbOperation.createTest(req);
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));
