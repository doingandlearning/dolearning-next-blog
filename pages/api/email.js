import nodemailer from "nodemailer";

const mailPassword = process.env.EMAIL_PASSWORD;
let transporter = nodemailer.createTransport(
  `smtps://fastmail@kevincunningham.co.uk:${mailPassword}@smtp.fastmail.com/?pool=true`
);

export default async function (req, res) {
  if (req.method === "POST") {
    try {
      const body = JSON.parse(req.body);
      if (!body.page) {
        return res.status(400).send({ message: "Need to pass incoming page." });
      }
      const message = {
        from: "website@kevincunningham.co.uk",
        to: "kevin@kevincunningham.co.uk",
        subject: `Enquiry from ${body.page}`,
        html: `<h1>Form submission from ${body.page}</h1>
				<ul>
					${Object.keys(body).map((field) => `<li>${field}: ${body[field]}</li>`)}
				</ul>`,
      };
      await transporter.sendMail(message);
      return res.send({ message: "Success" });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: JSON.stringify(error) });
    }
  }
}
