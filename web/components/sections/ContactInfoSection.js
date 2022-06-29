import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../functions/classNames";
import SimpleBlockContent from "../SimpleBlockContent";
import Image from "next/image";

function ContactInfoSection({ contact }) {
  return (
    <>
      <div className={classNames("bg-white py-12 px-8", "lg:py-24")}>
        <div className={classNames("max-w-7xl mx-auto px-4 text-dark-gray")}>
          <div
            className={classNames("grid grid-cols-1 gap-y-8", "sm:grid-cols-2")}
          >
            {contact &&
              contact.map((office, index) => {
                return (
                  <div
                    className={classNames("text-lg", "lg:text-2xl")}
                    key={index}
                  >
                    <p className="font-bold">{office.office}</p>
                    {office.info && <SimpleBlockContent blocks={office.info} />}
                  </div>
                );
              })}
          </div>
          <div
            className={classNames(
              "h-0.5 w-full my-8 mx-auto bg-dark-gray",
              "lg:my-16"
            )}
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
          <div
            className={classNames(
              "flex flex-col justify-center mt-12",
              "lg:mt-24"
            )}
          >
            <Image
              src="/images/map.svg"
              alt="Coverage Map"
              width={1200}
              height={800}
            />
            <p
              className={classNames(
                "font-medium pt-12",
                "md:text-3xl md:pt-24"
              )}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

ContactInfoSection.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object),
};

export default ContactInfoSection;
