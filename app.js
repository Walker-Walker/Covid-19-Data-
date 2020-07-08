const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
// create server
const app = express();
// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/subscribe", (req, res) => {
  const { email, js } = req.body;
  console.log(req.body);
  // mailChimp data
  const mcData = {
    members: [
      {
        email_address: email,
        status: "pending",
      },
    ],
  };
  // stringify mcData
  const mcDataPost = JSON.stringify(mcData);
  const options = {
    url: "https://us10.api.mailchimp.com/3.0/lists/18a05c619e",
    method: "POST",
    headers: {
      Authorization: "auth ee2b806fd6da78c472aa18119985f984-us10",
    },
    body: mcDataPost,
  };
  // server side validation
  if (email) {
    request(options, (response, body) => {
      if (js) {
        res.sendStatus(200);
      } else {
        res.redirect("/sucess.htnml");
      }
    });
  } else {
    res.status(404).send({ message: "Failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server started!"));
