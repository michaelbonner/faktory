import PropTypes from "prop-types";
import React from "react";
import Cta from "../Cta";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

function ImageSection({
  backgroundColor,
  cta,
  heading,
  image,
  imagePosition,
  text,
}) {
  const bgColorMap = {
    white: "bg-near-white",
    "lighter-gray": "bg-almost-white",
    "light-gray": "bg-light-gray",
    mint: "bg-mint",
    peach: "bg-peach",
  };

  return (
    <div className={`${bgColorMap[backgroundColor]}`}>
      <div
        className={`max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid ${
          image ? "lg:grid-cols-2" : "text-center"
        } gap-16 items-center`}
      >
        {image && (
          <div className={`${imagePosition === "right" && "order-last"}`}>
            <SanityImage image={image} />
          </div>
        )}
        <div className="grid gap-y-4 user-content">
          <h3 className="text-gold">{heading}</h3>

          {text && (
            <div className="text-dark-gray">
              <SimpleBlockContent blocks={text} />
            </div>
          )}
          {cta && cta.route && (
            <div className="mt-12">
              <Cta {...cta} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
  imagePosition: PropTypes.string,
};

export default ImageSection;
