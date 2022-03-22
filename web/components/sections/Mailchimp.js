import PropTypes from "prop-types"
import React from "react"
import MailchimpForm from "react-mailchimp-form"

export default function Mailchimp(props) {
  const { heading, subtitle, actionUrl } = props

  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <p>{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true,
              },
            ]}
            button
            styles={{
              sendingMsg: {
                color: "#0652DD",
              },
              successMsg: {
                color: "#009432",
              },
              duplicateMsg: {
                color: "#EE5A24",
              },
              errorMsg: {
                color: "red",
              },
            }}
            messages={{
              sending: "Sending...",
              success: "Thank you for subscribing!",
              error: "An unexpected internal error has occurred.",
              empty: "You must write an e-mail.",
              duplicate: "Already subscribed",
              button: "Subscribe!",
            }}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
