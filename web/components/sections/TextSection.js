import React from "react";
import PropTypes from "prop-types";
import SimpleBlockContent from "../SimpleBlockContent";
import Cta from "../Cta";

function TextSection({ heading, text, cta, textAlign }) {
  return (
    <section
      className="bg-near-white"
      style={{
        "text-align": `${textAlign}`,
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
};

export default TextSection;
