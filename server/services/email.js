const nodemailer = require("nodemailer");

function generateMail(from, to, subject, html) {
  const templates = [
    {
      id: 1,
      subject: '',
      html: `
      `
    }
  ]

}

exports.sendMail = function ({ email, subject, html }) {
  const from = 'dilip98914@gmail.com'//hardcoded for now
  const client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: from,
      pass: process.env.gmail_app_password
    }
  });

  client.sendMail(
    {
      from,
      to: email,
      subject,
      html
    }
  ).then(result => {
    return result
  }).catch(err => {
    console.error(err)
    return ['sending email failed!']
  })
}

