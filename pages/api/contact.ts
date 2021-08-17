require("dotenv").config();

export default function (req: any, res: any) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "demo@demo.gmail",
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: "demo@demo.com",
    to: "demo@demo.gmail",
    subject: `Message from ${req.body.lastName}, ${req.body.firstName}`,
    text: req.body.message,
    html: `<div>{req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send("success");
}
