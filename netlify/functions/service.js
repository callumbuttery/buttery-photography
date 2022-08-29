import nodemailer from 'nodemailer';

export const handler = async () => {
  console.log('hitting server');
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.VUE_APP_EMAIL_EMAIL,
      pass: process.env.VUE_APP_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_EMAIL,
    to: process.env.EMAIL_EMAIL,
    subject: "HELLO WORLD",
    text: "HELLO WORLD TEXT",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('failed to send email: ', error)
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Failed to send email",
        }),
      };
    } else {
      console.log('successfully sent email!');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Email sent!" }),
      };
    }
  });
};
