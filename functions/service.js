exports.handler = async function (event) {
  try {
    const sendGridMail = require("@sendgrid/mail");
    const { name, email, phone, item, subject, venue, date } = JSON.parse(
      event.body
    );

    sendGridMail.setApiKey(process.env.VUE_APP_SENDGRID_API_KEY);
    const html = `
      <div> 
         Email recieved from ${name} @${email} @${phone}! <br><br>
         Event Venue: ${venue},
         <br>
         Event Date: ${date},
         <br>
         <br>
         Email Subject: ${subject}
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
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};
