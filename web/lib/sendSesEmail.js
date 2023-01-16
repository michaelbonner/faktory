let nodemailer = require("nodemailer");
let aws = require("@aws-sdk/client-ses");

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: process.env.AWS_CONFIG_REGION,
  credentials: {
    accessKeyId: process.env.AWS_CONFIG_ACCESS_KEY,
    secretAccessKey: process.env.AWS_CONFIG_SECRET_KEY,
  },
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export const sendSesEmail = async (
  from,
  to,
  subject,
  html,
  text,
  attachment
) => {
  const mailOptions = {
    from,
    to,
    subject,
    html,
    text,
  };

  if (attachment) {
    mailOptions.attachments = [attachment];
  }

  return await transporter.sendMail(mailOptions);
};
