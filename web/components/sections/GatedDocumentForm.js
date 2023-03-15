import { Turnstile } from "@marsidev/react-turnstile";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { classNames } from "../../functions/classNames";
import SimpleBlockContent from "../SimpleBlockContent";
import SanityImage from "../SanityImage";
import Link from "next/link";

const classList = {
  fieldLabel: classNames("block font-medium"),
  textField: classNames(
    "mt-1 block w-full text-base",
    "border border-gray-300",
    "focus:ring-indigo-500 focus:border-indigo-500"
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

function GatedDocumentForm({
  description,
  emailTo,
  image,
  returnHomeButtonText,
  submitButtonText,
  title,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formContainerRef = useRef(null);
  const formRef = useRef(null);

  return (
    <>
      <div
        className={classNames(
          "max-w-7xl mx-auto px-4 py-24 text-dark-gray",
          "lg:py-36"
        )}
      >
        <h1
          className={classNames(
            "text-5xl text-center leading-tight font-semibold font-sans text-gold pb-24",
            "3xl:text-7xl",
            "4xl:text-8xl"
          )}
        >
          {title}
        </h1>
        <div
          className={classNames(
            "grid grid-cols-1 max-w-7xl mx-auto px-4 text-dark-gray",
            "md:grid-cols-2"
          )}
        >
          <div className={classNames("max-w-lg text-lg", "lg:text-xl")}>
            <div className="pb-12">
              <SanityImage image={image} />
            </div>
            <SimpleBlockContent blocks={description} />
          </div>
          <div ref={formContainerRef}>
            {isSubmitted && (
              <div
                className="my-12 grid items-stretch border-b border-gold"
                style={{ height: `${formRef?.current?.offsetHeight}px` }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gold">Thank you!</h2>
                  <p className="my-8 text-lg">
                    We have received your message and will be in touch shortly.
                  </p>
                  <Link href="/">
                    <a className="standardButton">{returnHomeButtonText}</a>
                  </Link>
                </div>
                <div className="min-h-[200px] flex items-center grow justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Brand bars"
                    height="30px"
                    src="/images/brand-bars.svg"
                    width="180px"
                  />
                </div>
              </div>
            )}
            {!isSubmitted && (
              <form
                className={classNames(isSubmitting && "opacity-50")}
                ref={formRef}
                onSubmit={async (event) => {
                  event.preventDefault();

                  // setIsSubmitting(true);

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
                      setIsSubmitted(true);
                      formContainerRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
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
                <div
                  className={classNames(
                    "grid grid-cols-1 gap-y-8 gap-x-4 transition-opacity",
                    "md:grid-cols-4"
                  )}
                >
                  <div className="md:col-span-2">
                    <label
                      className={classList.fieldLabel}
                      htmlFor="first_name"
                    >
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
                  <div className="md:col-span-2">
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
                  <div className="md:col-span-3">
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
                  <div className="md:col-span-4">
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
                  <div className="md:col-span-3">
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
                  <div className="md:col-span-4">
                    <label
                      className={classList.fieldLabel}
                      htmlFor="organization"
                    >
                      Organization
                    </label>
                    <input
                      className={classList.textField}
                      type="text"
                      name="organization"
                      id="organization"
                      placeholder="Organization"
                      required
                    />
                  </div>
                  <div className="md:col-span-4">
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
                </div>

                <div className="grid grid-cols-1 max-w-sm mx-auto">
                  <Turnstile
                    options={{
                      theme: "light",
                    }}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  />
                  <button className="standardButton">{submitButtonText}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

GatedDocumentForm.propTypes = {
  description: PropTypes.array,
  emailTo: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  returnHomeButtonText: PropTypes.string,
  submitButtonText: PropTypes.string,
  title: PropTypes.string,
};

export default GatedDocumentForm;