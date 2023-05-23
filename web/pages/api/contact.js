import { sendSesEmail } from "../../lib/sendSesEmail";
import { v4 as uuidV4 } from "uuid";
import dynamoDb from "../../lib/dynamoDb";
import mailchimpClient from "@mailchimp/mailchimp_marketing";

mailchimpClient.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
});

const turnstileEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async function handler(request, response) {
  const captchaResponseData = await validateCaptcha(
    request.body["cf-turnstile-response"]
  );

  if (!captchaResponseData.success) {
    response.status(400).json({
      success: false,
      message: "Captcha validation failed",
    });
    return;
  }

  const {
    emailTo,
    email,
    first_name,
    job_title,
    last_name,
    organization,
    phone,
    tell_us_more,
    mailchimpListId,
  } = request.body;

  const contactId = uuidV4();
  const contact = {
    id: contactId,
    emailTo,
    email,
    first_name,
    job_title,
    last_name,
    phone,
    tell_us_more,
    createdAt: Date.now(),
  };

  const mailchimpAudienceContact = {
    email,
    first_name,
    last_name,
    mailchimpListId,
  };

  // save in db
  const saveToDynamoDb = await saveContactToDynamoDb(contact);
  if (!saveToDynamoDb.success) {
    return response.status(500).json({
      success: false,
      message: "Error saving contact to database",
    });
  }

  // send email
  if (!mailchimpListId) {
    const sendEmail = await sendEmailWithSes(contact);
    if (!sendEmail.success) {
      return response.status(500).json({
        success: false,
        message: "Error sending email",
      });
    }
  }

  // add to mailchimp
  if (mailchimpListId) {
    const addToMailchimp = await addToMailchimpList(mailchimpAudienceContact);
    if (!addToMailchimp.success) {
      return response.status(500).json({
        success: false,
        message: "Error adding contact to mailchimp.",
        error: addToMailchimp.error,
      });
    }
  }

  // return success
  return response.status(200).json({
    success: true,
    message: "Thank you for your submission!",
  });
}

const validateCaptcha = async (token) => {
  // validate captcha
  const body = `secret=${encodeURIComponent(
    process.env.TURNSTILE_SECRET_KEY
  )}&response=${encodeURIComponent(token)}`;

  const captchaResponse = await fetch(turnstileEndpoint, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  return await captchaResponse.json();
};

const saveContactToDynamoDb = async (contact) => {
  try {
    await dynamoDb.put({
      Item: contact,
    });

    return { success: true };
  } catch (error) {
    console.error("dynamo error", error);
    return { success: false };
  }
};

const addToMailchimpList = async ({
  email,
  first_name,
  last_name,
  mailchimpListId,
}) => {
  try {
    await mailchimpClient.lists.addListMember(mailchimpListId, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first_name,
        LNAME: last_name,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("mailchimp error", error);
    return { success: false, error: error };
  }
};

const sendEmailWithSes = async ({
  emailTo,
  email,
  first_name,
  last_name,
  job_title,
  phone,
  tell_us_more,
}) => {
  try {
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
      `<p><strong>Name</strong>:<br />${first_name} ${last_name}</p>
        <p><strong>Phone</strong>:<br />${phone}</p>
        <p><strong>Email</strong>:<br />${email}</p>
        <p><strong>Job Title</strong>:<br />${job_title}</p>
        <p><strong>Tell Us More</strong>:<br /> ${tell_us_more}</p>`.replaceAll(
        "\n",
        "<br />"
      ),
      `Name:\n ${first_name} ${last_name}\n
          Phone:\n ${phone}\n
          Email:\n ${email}\n
          Job Title:\n ${job_title}\n
          Tell Us More:\n ${tell_us_more}`,
      email
    );
    return { success: true };
  } catch (error) {
    console.error("ses error", error);
    return { success: false };
  }
};
