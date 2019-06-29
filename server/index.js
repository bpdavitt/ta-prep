const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const db = require('../database')

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("dist"));

app.post('/todos', (req, res) => {
  db.addToDo(req.body, (err, message) => {
    if (err) {
      res.status(400).end()
    } else {
      res.send('POST successful, todo added');
    }
  })
})

app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

app.listen(3000, () => console.log("Now listening on port 3000!"));
