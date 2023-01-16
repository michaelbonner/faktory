import PropTypes from "prop-types";
import React, { useState } from "react";
import { classNames } from "../../functions/classNames";
import SimpleBlockContent from "../SimpleBlockContent";
import { Turnstile } from "@marsidev/react-turnstile";

const classList = {
  fieldLabel: classNames("block font-medium"),
  textField: classNames(
    "mt-1 block w-full",
    "lg:text-base",
    "border border-gray-300",
    "focus:ring-indigo-500 focus:border-indigo-500",
    "sm:text-sm"
  ),
};

const serializeForm = function (form) {
  const returnObject = {};
  const formData = new FormData(form);
  for (let key of formData.keys()) {
    returnObject[key] = formData.get(key);
  }
  return returnObject;
};

function ContactInfoSection({ contact, emailTo }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className={classNames("bg-white py-12 px-8", "lg:py-24")}>
        <div className={classNames("max-w-7xl mx-auto px-4 text-dark-gray")}>
          <div
            className={classNames(
              "grid grid-cols-1 gap-x-8 gap-y-8 items-start",
              "lg:grid-cols-2"
            )}
          >
            <div className={classNames("grid gap-8", "lg:gap-16")}>
              {contact &&
                contact.map((office, index) => {
                  return (
                    <div
                      className={classNames("text-lg", "lg:text-2xl")}
                      key={index}
                    >
                      <p className="font-bold">{office.office}</p>
                      {office.info && (
                        <SimpleBlockContent blocks={office.info} />
                      )}
                    </div>
                  );
                })}
              <div
                className={classNames("h-0.5 w-full mx-auto bg-dark-gray")}
              ></div>
              <a
                className={classNames(
                  "text-xl font-medium",
                  "lg:text-3xl",
                  "hover:underline"
                )}
                href="mailto:info@faktorymail.com"
              >
                info@faktorymail.com
              </a>
            </div>
            {isSubmitted && (
              <div>
                <h2 className="text-2xl font-bold">Thank you!</h2>
                <p className="mt-4">
                  We have received your message and will be in touch shortly.
                </p>
              </div>
            )}
            {!isSubmitted && (
              <form
                className={classNames(
                  "grid grid-cols-1 gap-y-8 gap-x-4 transition-opacity",
                  "lg:grid-cols-2",
                  isSubmitting && "opacity-50"
                )}
                onSubmit={async (event) => {
                  event.preventDefault();

                  setIsSubmitting(true);

                  try {
                    const form = event.target;
                    const data = serializeForm(form);
                    data.emailTo = emailTo;

                    const submitForm = await fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    });
                    const response = await submitForm.json();

                    if (response.success) {
                      alert("Thank you for your submission!");
                      setIsSubmitted(true);
                    } else {
                      alert(
                        "There was an error submitting your form. Please try again."
                      );
                    }

                    setIsSubmitting(false);
                  } catch (error) {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div>
                  <label className={classList.fieldLabel} htmlFor="first_name">
                    First Name*
                  </label>
                  <input
                    className={classList.textField}
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className={classList.fieldLabel} htmlFor="last_name">
                    Last Name*
                  </label>
                  <input
                    className={classList.textField}
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <label className={classList.fieldLabel} htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    className={classList.textField}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="(000) 000-0000"
                    required
                  />
                </div>
                <div>
                  <label className={classList.fieldLabel} htmlFor="email">
                    Email*
                  </label>
                  <input
                    className={classList.textField}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@organization.com"
                    required
                  />
                </div>
                <div>
                  <label className={classList.fieldLabel} htmlFor="job_title">
                    Job Title
                  </label>
                  <input
                    className={classList.textField}
                    type="text"
                    name="job_title"
                    id="job_title"
                    placeholder="Job Title"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label
                    className={classList.fieldLabel}
                    htmlFor="tell_us_more"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    rows="8"
                    name="tell_us_more"
                    id="tell_us_more"
                    className={classList.textField}
                    placeholder="What brand or marketing problems are you trying to solve?"
                  ></textarea>
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-4 justify-between items-end">
                  <Turnstile
                    options={{
                      theme: "light",
                    }}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  />
                  <button className="standardButton">Submit</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

ContactInfoSection.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object),
  emailTo: PropTypes.string,
};

export default ContactInfoSection;
