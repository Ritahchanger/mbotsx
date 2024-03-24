const nodemailer = require('nodemailer')
require('dotenv').config()
const express = require('express')
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'dennispeter2580@gmail.com',
    pass: 'mvgg nqud nabr yvuk'
  }
});

async function main(email,fname,lname,message) {
  const info = await transporter.sendMail({
    from: '"Dennis Peter 👻" <dennispeter2580@gmail.com>',
    to:"peterdennis573@gmail.com",
    subject: 'Hello ✔',
    text: 'Hello world?',
    html:`<h1>This is a message from ${fname} ${lname} and his email is ${email}</h1></br>
    ${message}
    `
  });
  console.log('Message sent: %s', info.messageId);
}
exports.sendEmail = async (req, res) => {
  try {
    await main(req.body.email,req.body.fname,req.body.lname,req.body.message);
    return res
      .status(200)
      .json({ msg: 'The message has been sent successfully' })
  } catch (error) {
    console.log('Problem arised trying to send the email to the user')
  }
}
