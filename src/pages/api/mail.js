import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const { email, name, englishScore, mathScore, marks, totalMarks, date } =
      req.body;

    const formattedDate = date
      ? new Date(date).toLocaleString()
      : new Date().toLocaleString();

    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_EMAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_EMAIL_ADDRESS,
      to: [email],
      subject: `Thank you for taking the SAT Practice Exam`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <h2 style="color: #4CAF50; text-align: center;">Thank You for Taking the SAT Practice Exam!</h2>
              <p>Dear <b>${name || "Student"}</b>,</p>
              <p>Thank you for completing your SAT practice exam on <b>${formattedDate}</b>.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${name || "-"}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">English Score</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${englishScore}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Math Score</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${mathScore}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Total Marks</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${marks} / ${totalMarks}</td>
                </tr>
              </table>
              <p style="margin-top: 20px;">
                We appreciate your effort and hope this practice helps you prepare for your SAT exam.<br>
                If you have any questions or need further assistance, feel free to contact us.
              </p>
              <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
                This is an automated message from the system. Please do not reply.
              </p>
            </div>
          </body>
        </html>
      `,
    };

    await transport.sendMail(mailOptions);

    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}