import React from "react";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function TextSection({
  heading,
  text,
  cta,
  textAlign,
  colors,
  backgroundImage,
  // textColor,
}) {
  const image = urlFor(backgroundImage?.asset._ref);
  return (
    <section
      className="bg-near-white"
      style={{
        "text-align": `${textAlign}`,
        "background-color": `${colors}`,
        // backgroundImage:
        //   typeof image === "undefined" ? "none" : `url(${image})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // color: `${textColor}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-36 grid gap-8 lg:gap-16 items-center user-content">
        <h2>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {cta && cta.route && <Cta {...cta} />}
      </div>
    </section>
  );
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  cta: PropTypes.object,
  textAlign: PropTypes.string,
  colors: PropTypes.string,
  backgroundImage: PropTypes.object,
  textColor: PropTypes.string,
};

export default TextSection;
