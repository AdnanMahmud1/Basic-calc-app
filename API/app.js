const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3002;

app.post("/sum", (req, res) => {
  let data = req.body;
  const sum = data.firstNumber + data.secondNumber;
  res.json(sum);
});

app.post("/multi", (req, res) => {
  let data = req.body;
  const sum = data.firstNumber * data.secondNumber;
  res.json(sum);
});

app.listen(port, () => {
  console.log(`Server started on port`);
});
