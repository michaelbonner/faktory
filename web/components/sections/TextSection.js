import React from "react"
import PropTypes from "prop-types"
import SimpleBlockContent from "../SimpleBlockContent"

function TextSection(props) {
  const { heading, label, text } = props

  return (
    <div>
      <section>
        <div>{label}</div>
        <h2>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
