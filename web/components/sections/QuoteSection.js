import PropTypes from "prop-types";
import React from "react";

function QuoteSection({ quote, author }) {
  return (
    <div
      className="bg-dark-gray"
      style={{
        backgroundImage: `url("/images/texture-white.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`max-w-7xl mx-auto px-4 py-24 lg:py-36 text-center grid gap-y-12`}
      >
        <h5 className="text-gold text-4xl font-serif font-bold leading-[1.4]">
          {quote}
        </h5>
        <p className="text-white">&mdash; {author}</p>
      </div>
    </div>
  );
}

QuoteSection.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteSection;
