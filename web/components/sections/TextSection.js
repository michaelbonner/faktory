import PropTypes from "prop-types";
import React from "react";
import Cta from "../Cta";
import SimpleBlockContent from "../SimpleBlockContent";

function TextSection({
  heading,
  text,
  cta,
  textAlign,
  colors,
  backgroundImage,
}) {
  return (
    <section
      className="bg-near-white"
      style={{
        textAlign: `${textAlign}`,
        backgroundColor: `${colors}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-24 grid gap-8 items-center user-content">
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
