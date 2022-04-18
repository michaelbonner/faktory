import PropTypes from "prop-types";
import React from "react";
import SanityImage from "../SanityImage";

function FullSizeImage({ image }) {
  return (
    <>
      <div className="bg-dark-gray">
        <SanityImage image={image} />
      </div>
    </>
  );
}

FullSizeImage.propTypes = {
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default FullSizeImage;
