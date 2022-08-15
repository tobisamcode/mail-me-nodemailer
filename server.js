const express = require("express");
const ejs = require("ejs");
const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

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
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.mail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_TEST,
      pass: process.env.EMAIL_TEST_PSW
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_TEST,
    to: process.env.EMAIL_TEST,
    subject: `Message from ${req.body.name}, ${req.body.email}: ${req.body
      .subject}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
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
