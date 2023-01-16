import { sendSesEmail } from "../../lib/sendSesEmail";

const endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async function handler(request, response) {
  // validate captcha

  const body = `secret=${encodeURIComponent(
    process.env.TURNSTILE_SECRET_KEY
  )}&response=${encodeURIComponent(request.body.token)}`;

  const captchaResponse = await fetch(endpoint, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const captchaResponseData = await captchaResponse.json();

  if (!captchaResponseData.success) {
    response.status(400).json({
      success: false,
      message: "Captcha validation failed",
    });
    return;
  }

  try {
    const {
      emailTo,
      email,
      first_name,
      job_title,
      last_name,
      phone,
      tell_us_more,
    } = request.body;
    await sendSesEmail(
      [
        {
          name: "Faktory Contact Form",
          address: `noreply@faktoryagency.com`,
        },
      ],
      [
        {
          name: "Faktory Contact",
          address: emailTo,
        },
        {
          name: "Michael Bonner",
          address: "mike@bootpackdigital.com",
        },
      ],
      `New Faktory contact submission from ${first_name} ${last_name}`,
      `<p><strong>Name</strong>: ${first_name} ${last_name}</p>
<p><strong>Phone</strong>: ${phone}</p>
<p><strong>Email</strong>: ${email}</p>
<p><strong>Job Title</strong>: ${job_title}</p>
<p><strong>Tell Us More</strong>:<br /> ${tell_us_more}</p>`.replaceAll(
        "\n",
        "<br />"
      ),
      `Name: ${first_name} ${last_name}
Phone: ${phone}
Email: ${email}
Job Title: ${job_title}
Tell Us More:\n ${tell_us_more}`
    );
  } catch (error) {
    console.error("ses error", error);
    return response.status(500).json({
      success: false,
      message: "Error sending email",
    });
  }

  return response.status(400).json({
    success: true,
    message: "Thank you for your submission!",
  });
}
