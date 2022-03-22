import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

const builder = imageUrlBuilder(client);

function ImageSection(props) {
  const { heading, label, text, image, cta } = props;

  if (!image) {
    return null;
  }

  return (
    <div>
      <figure>
        <img
          src={builder.image(image).auto("format").width(2000).url()}
          alt={heading}
        />
        <figcaption>
          <div>
            <div>
              <div>{label}</div>
              <h2>{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && cta.route && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
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
