const express = require("express");
const ejs = require("ejs");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.eventNames.PORT || 5000;

// MiddleWares
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "samueloluwatobiloba48@gmail.com",
      pass: "nelson2000"
    }
  });

  const mailOPtions = {
    from: req.body.email,
    to: "samueloluwatobiloba48@gmail.com",
    subject: `Message from ${req.body.name}, ${req.body.email}: ${req.body
      .subject}`,
    text: req.body.message
  };

  transporter.sendMail(mailOPtions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
