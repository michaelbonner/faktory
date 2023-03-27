import PropTypes from "prop-types";
import React from "react";
import SanityImage from "./SanityImage";

function Figure({ alt, caption, asset }) {
  if (!asset) {
    return null;
  }

  return (
    <figure>
      <SanityImage image={asset} alt={alt} />
      {caption && (
        <figcaption>
          <div>
            <div>
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  );
}

Figure.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    caption: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};
export default Figure;
