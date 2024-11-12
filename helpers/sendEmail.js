const nodemailer = require("nodemailer");
function sendEmail(email, subject,emailTemplate){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "rajib.cit.bd@gmail.com",
          pass: "hpuvyrjjehedpjrh",
        },
      });
      
        const info = transporter.sendMail({
          from: 'test',
          to: email,
          subject: subject, 
          html: emailTemplate,
        });
      
}

module.exports = sendEmail