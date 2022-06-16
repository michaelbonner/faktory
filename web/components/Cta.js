import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Cta({ className = "", title, route, link }) {
  if (route && route.slug && route.slug.current) {
    return (
      <p>
        <Link
          href={{
            pathname: "/LandingPage",
            query: { slug: route.slug.current },
          }}
          as={`/${route.slug.current}`}
        >
          <a className={className || "standardButton"}>{title}</a>
        </Link>
      </p>
    );
  }

  if (link) {
    return (
      <p>
        <a className={className || "standardButton"} href={link}>
          {title}
        </a>
      </p>
    );
  }

  return (
    <p>
      <a className={className || "standardButton"}>{title}</a>
    </p>
  );
}

Cta.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

export default Cta;
