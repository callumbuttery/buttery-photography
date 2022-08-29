exports.handler = async function (event) {
  const sendGridMail = require("@sendgrid/mail");
  console.log(process.env.VUE_APP_EMAIL_EMAIL);

  console.log("hitting server: ", event.body);

  const { name, email, phone, item } = JSON.parse(event.body);

  sendGridMail.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY);
  const html = `
      <div> 
         Email recieved from ${name} @${email} @${phone}! <br><br>
          Thanks for getting in touch.
          We have received your message
          and one of our customer care
          representatives will get in
          touch shortly
          <br><br>
          Best <br>
          John Doe
      </div>
    `;
  const mail = {
    from: process.env.VUE_APP_EMAIL_EMAIL,
    to: process.env.VUE_APP_EMAIL_EMAIL,
    subject: `${item} - ${email}`,
    html,
  };
  await sendGridMail.send(mail);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent" }),
  };
};
