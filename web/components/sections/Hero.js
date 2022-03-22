import imageUrlBuilder from "@sanity/image-url";
import PropTypes from "prop-types";
import React from "react";
import client from "../../client";
import Cta from "../Cta";
import SimpleBlockContent from "../SimpleBlockContent";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero(props) {
  const { heading, backgroundImage, tagline, ctas } = props;

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage)
          .width(2000)
          .auto("format")
          .url()}")`,
      }
    : {};

  return (
    <div style={style}>
      <div>
        <h1>{heading}</h1>
        <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        {ctas && (
          <div>
            {ctas.map((cta) => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
