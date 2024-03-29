import imageUrlBuilder from "@sanity/image-url";
import groq from "groq";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import React from "react";
import client from "../client";
import Layout from "../components/Layout";
import RenderSections from "../components/RenderSections";
import { getSlugVariations, slugParamToPath } from "../utils/urls";

const pageFragment = groq`
...,
content[] {
  ...,
  cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  },
  workItems[]->
  ,
  caseStudies[]->
}`;

/**
 * Fetches data for our pages.
 *
 * The [[...slug]] name for this file is intentional - it means Next will run this getServerSideProps
 * for every page requested - /, /about, /contact, etc..
 * From the received params.slug, we're able to query Sanity for the route corresponding to the currently requested path.
 */
export const getServerSideProps = async ({ params }) => {
  const slug = slugParamToPath(params?.slug);

  let data;

  // Frontpage - fetch the linked `frontpage` from the global configuration document.
  if (slug === "/") {
    data = await client
      .fetch(
        groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ${pageFragment}
          }
        }
      `
      )
      .then((res) => (res?.frontpage ? { ...res.frontpage, slug } : undefined));
  } else if (params.slug.length > 1 && params.slug[0] === "work") {
    // Work item route
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "workItem" && slug.current == '${params.slug[1]}'][0]{
            ${pageFragment}
        }`
      )
      .then((res) => {
        return res?.content ? { ...res, slug } : undefined;
      });
  } else if (params.slug.length > 1 && params.slug[0] === "case-studies") {
    // caseStudy item route
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "caseStudy" && slug.current == '${params.slug[1]}'][0]{
            ${pageFragment}
        }`
      )
      .then((res) => {
        return res?.content ? { ...res, slug } : undefined;
      });
  } else {
    // Regular route
    data = await client
      .fetch(
        // Get the route document with one of the possible slugs for the given requested path
        groq`*[_type == "route" && slug.current in $possibleSlugs][0]{
          page-> {
            ${pageFragment}
          }
        }`,
        { possibleSlugs: getSlugVariations(slug) }
      )
      .then((res) => (res?.page ? { ...res.page, slug } : undefined));
  }

  if (!data?._type) {
    return {
      notFound: true,
    };
  }

  return {
    props: data || {},
  };
};

const builder = imageUrlBuilder(client);

const LandingPage = (props) => {
  const {
    title = "Missing title",
    description,
    disallowRobots,
    openGraphImage,
    content = [],
    config = {},
    slug,
  } = props;

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : [];

  return (
    <Layout config={config}>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={description}
        canonical={
          config.url &&
          `${config.url}/${slug}`
            .replace(/\/\//g, "/")
            .replace("https:/www", "https://www")
        }
        openGraph={{
          images: openGraphImages,
          type: "website",
        }}
        noindex={disallowRobots}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  );
};

LandingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  disallowRobots: PropTypes.bool,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
};

export default LandingPage;
