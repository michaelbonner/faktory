import PropTypes from "prop-types";
import React from "react";
import Cta from "../Cta";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

function ImageSection({ backgroundColor, heading, text, image, cta }) {
  if (!image) {
    return null;
  }

  const bgColorMap = {
    white: "bg-near-white",
    mint: "bg-mint",
  };

  return (
    <div className={`${bgColorMap[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid lg:grid-cols-2 gap-16 items-center">
        <SanityImage image={image} />
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
};

export default ImageSection;
