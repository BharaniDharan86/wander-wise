import nodemailer from "nodemailer";

export async function sendEmail(options) {
  const transporter = nodemailer.createTransport({
    service: "Brevo",
    auth: {
      user: "bharanidharanm78@gmail.com",
      pass: "EJ210XOrK6fcNbF8",
    },
  });

  const mailOptions = {
    from: "bharanidharanm78@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.message,
  };

  return await transporter.sendMail(mailOptions);
}
