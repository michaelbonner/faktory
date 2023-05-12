import { Turnstile } from "@marsidev/react-turnstile";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../functions/classNames";
import SimpleBlockContent from "../SimpleBlockContent";
import SanityImage from "../SanityImage";
import { serializeForm } from "../../functions/serializeForm";
import Cta from "../Cta";

const classList = {
  fieldLabel: classNames("block font-medium"),
  textField: classNames(
    "mt-1 block w-full text-base",
    "border border-gray-300",
    "focus:ring-indigo-500 focus:border-indigo-500"
  ),
};

function GatedDocumentForm({
  description,
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
  const [sectionHeight, setSectionHeight] = useState(0);
  const [formOffset, setFormOffset] = useState(0);

  const formContainerRef = useRef(null);
  const formRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const formContainer = formContainerRef.current;
    const content = contentRef.current;
    if (formContainer && content) {
      const { height: formHeight } = formContainer.getBoundingClientRect();
      const { height: contentHeight } = content.getBoundingClientRect();
      setFormOffset((contentHeight - formHeight) / 2.5);
      setSectionHeight(formHeight + contentHeight - formOffset + 10);
    }
  }, [formContainerRef, contentRef, formOffset]);

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: `${sectionHeight}px` }}
    >
      <div
        ref={contentRef}
        className={classNames(
          "max-w-7xl mx-auto px-4 pt-24 text-dark-gray",
          "lg:pt-36"
        )}
      >
        <h1
          className={classNames(
            "text-5xl text-center leading-normal tracking-wide font-semibold font-display text-gold pb-24",
            "3xl:text-7xl",
            "4xl:text-8xl"
          )}
        >
          {title}
        </h1>
        <div className="max-w-7xl mx-auto px-4 text-dark-gray overflow-clip">
          <div className={classNames("text-lg", "lg:text-xl")}>
            <SimpleBlockContent blocks={description} />
            <div className="py-16 max-w-3xl mx-auto">
              <SanityImage image={image} />
            </div>
            <p>
              Duis magna cillum duis aute in tempor esse enim laboris ullamco
              duis sunt elit. Magna duis laborum nulla ut duis ea occaecat
              reprehenderit. Eiusmod incididunt pariatur veniam voluptate veniam
              laborum culpa eiusmod. Aliquip mollit reprehenderit nulla et
              officia sint reprehenderit id cillum labore deserunt cupidatat.
              Duis magna cillum duis aute in tempor esse enim laboris ullamco
              duis sunt elit. Magna duis laborum nulla ut duis ea occaecat
              reprehenderit. Eiusmod incididunt pariatur veniam voluptate veniam
              laborum culpa eiusmod. Aliquip mollit reprehenderit nulla et
              officia sint reprehenderit id cillum labore deserunt cupidatat.
              Duis magna cillum duis aute in tempor esse enim laboris ullamco
              duis sunt elit. Magna duis laborum nulla ut duis ea occaecat
              reprehenderit. Eiusmod incididunt pariatur veniam voluptate veniam
              laborum culpa eiusmod. Aliquip mollit reprehenderit nulla et
              officia sint reprehenderit id cillum labore deserunt cupidatat.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-gray-100 pb-14 absolute -mt-24"
        style={{ marginTop: `-${formOffset}px` }}
        ref={formContainerRef}
      >
        <div className="w-full grid items-center justify-center p-8">
          {!isSubmitted && (
            <div className="text-center pb-8 max-w-3xl mx-auto">
              <h3
                className={classNames(
                  "text-5xl text-center leading-normal tracking-wide font-semibold font-display text-gold pb-2",
                  "3xl:text-7xl",
                  "4xl:text-8xl"
                )}
              >
                Modal Title
              </h3>
              <p className={classNames("text-lg", "lg:text-xl")}>
                Non deserunt proident ut cupidatat irure ex mollit esse veniam
                anim proident adipisicing.
              </p>
            </div>
          )}
        </div>
        {isSubmitted && (
          <div
            className="py-12 grid gap-y-4 items-stretch border-b border-gold user-content max-w-3xl mx-auto justify-center text-center"
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
                "grid grid-cols-1 gap-y-8 gap-x-4 transition-opacity px-16",
                "md:grid-cols-2"
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
              <div>
                <label className={classList.fieldLabel} htmlFor="organization">
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
              <div className="md:col-span-2">
                <label className={classList.fieldLabel} htmlFor="tell_us_more">
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

            <div className="grid max-w-sm mx-auto gap-4 mt-4">
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
    </div>
  );
}

GatedDocumentForm.propTypes = {
  cta: PropTypes.object,
  description: PropTypes.array,
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
