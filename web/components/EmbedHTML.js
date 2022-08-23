import React from "react";
import PropTypes from "prop-types";

function EmbedHTML({ value }) {
  if (!value) return undefined;
  const { html } = value;
  if (!html) {
    return undefined;
  }
  return <div className="mx-8" dangerouslySetInnerHTML={{ __html: html }} />;
}

EmbedHTML.propTypes = {
  value: PropTypes.shape({
    html: PropTypes.string,
  }),
};
export default EmbedHTML;
