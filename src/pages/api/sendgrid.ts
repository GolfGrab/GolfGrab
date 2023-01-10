import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

type Err = {
  statusCode: number;
  message: string;
};

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: "surapus01@gmail.com", // Your email where you'll receive emails
      from: "surapus01@gmail.com", // your website email address here
      subject: `[Lead from website] : ${req.body.name} - ${req.body.email} - GolfGrab Portfolio`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>Contact Form</title>
        <meta name="description" content="Contact Form">
        <meta name="author" content="GolfGrab">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${req.body.userMessage}</p>
          </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    const apiErr = error as Err;
    console.log(error);
    return res.status(apiErr.statusCode || 500).json({ error: apiErr.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
