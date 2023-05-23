import { Turnstile } from "@marsidev/react-turnstile";
import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { classNames } from "../../functions/classNames";
import { serializeForm } from "../../functions/serializeForm";
import Cta from "../Cta";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

const classList = {
  fieldLabel: classNames("block font-medium"),
  textField: classNames(
    "mt-1 block w-full text-base",
    "border border-gray-300",
    "focus:ring-indigo-500 focus:border-indigo-500"
  ),
};

function GatedDocumentForm({
  firstContentBlock,
  secondContentBlock,
  formTitle,
  formBody,
  emailTo,
  image,
  successMessage,
  cta,
  submitButtonText,
  title,
  mailchimpListId,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formContainerRef = useRef(null);
  const formRef = useRef(null);

  return (
    <>
      <div
        className={classNames(
          "max-w-7xl mx-auto pt-24 text-dark-gray user-content",
          "lg:pt-36"
        )}
      >
        <h1 className="text-gold text-center py-6 px-4">{title}</h1>
        <div className="max-w-7xl mx-auto">
          <div className={classNames("px-5", "lg:px-12")}>
            <SimpleBlockContent blocks={firstContentBlock} />
          </div>
          <div className="py-16 max-w-3xl mx-auto">
            <SanityImage image={image} />
          </div>
          <div className={classNames("px-5", "lg:px-12")}>
            <SimpleBlockContent blocks={secondContentBlock} />
          </div>
        </div>
      </div>
      <div
        ref={formContainerRef}
        className="w-full bg-gray-50 border-t border-gold pb-16"
      >
        <div className="w-full grid items-center justify-center px-4">
          {!isSubmitted && (
            <div className="text-center py-8 max-w-3xl mx-auto user-content">
              <h2>{formTitle}</h2>
              <SimpleBlockContent blocks={formBody} />
            </div>
          )}
        </div>
        {isSubmitted && (
          <div
            className="grid gap-y-4 items-stretch border-b border-gold user-content max-w-3xl mx-auto justify-center text-center px-4 pt-8"
            style={{ height: `${formRef?.current?.offsetHeight}px` }}
          >
            {successMessage && <SimpleBlockContent blocks={successMessage} />}
            {cta && cta.route && <Cta {...cta} />}

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

              setIsSubmitting(true);

              try {
                const form = event.target;
                const data = serializeForm(form);
                data.emailTo = emailTo;
                data.mailchimpListId = mailchimpListId;

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
                  const error = JSON.parse(response.error.response.text);
                  alert(
                    `There was a problem submitting the form. Error: ${error.title}`
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
                "grid grid-cols-1 gap-8 transition-opacity max-w-2xl mx-auto pt-6 px-4"
              )}
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
            </div>

            <div className="grid max-w-sm mx-auto gap-4 pt-6">
              <button className="standardButton">
                {submitButtonText || "Submit"}
              </button>
              <div className="mx-auto">
                <Turnstile
                  options={{
                    theme: "light",
                  }}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

GatedDocumentForm.propTypes = {
  cta: PropTypes.object,
  firstContentBlock: PropTypes.array,
  secondContentBlock: PropTypes.array,
  formTitle: PropTypes.string,
  formBody: PropTypes.array,
  emailTo: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  successMessage: PropTypes.arrayOf(PropTypes.object),
  submitButtonText: PropTypes.string,
  title: PropTypes.string,
  mailchimpListId: PropTypes.string,
};

export default GatedDocumentForm;
