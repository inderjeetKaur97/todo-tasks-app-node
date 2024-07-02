import nodemailer from 'nodemailer';
import config from '../config/env.config';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_PASS,
  },
});

const sendReminderEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: config.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log(`Email sent to ${to} successfully.`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
export default { sendReminderEmail };
