import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";
import Link from "next/link";

function CaseStudiesSection({
  headingLine1,
  headingLine2,
  body,
  caseStudies,
  ...rest
}) {
  const [featureImageHeight, setFeatureImageHeight] = useState(100);
  const featureImage = useRef(null);

  useEffect(() => {
    const image = featureImage.current;
    if (image) {
      const { height } = image.getBoundingClientRect();
      setFeatureImageHeight(height);
    }
  }, [featureImage]);
  return (
    <>
      {caseStudies.length > 0 &&
        caseStudies.map((caseStudy) => {
          const caseStudyImage = caseStudy.caseStudyImage?.asset._ref;
          return (
            <div key={caseStudy._id}>
              <div
                className="lg:max-w-7xl lg:mx-auto lg:px-4 lg:-mt-24"
                style={{
                  marginBottom: `${featureImageHeight / 2}px`,
                  maxHeight: `${featureImageHeight / 2}px`,
                }}
              >
                <div
                  className="relative aspect-w-16 aspect-h-9 group"
                  ref={featureImage}
                  style={{
                    height: `${featureImageHeight}px`,
                  }}
                >
                  <div className="absolute inset-0">
                    <SanityImage
                      animate={false}
                      objectFit="cover"
                      image={caseStudyImage}
                    />
                  </div>
                  <div className="absolute flex items-end justify-center p-12 inset-0 opacity-0 group-hover:opacity-100 bg-orange bg-opacity-70 transition-all duration-500">
                    <Link href={`/case-studies/${caseStudy.slug.current}`}>
                      <a
                        className={classNames(
                          "whiteTransparentButton",
                          "lg:w-1/4"
                        )}
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  "w-full text-center",
                  "lg:-mt-64 lg:mb-48"
                )}
              >
                <div
                  className={classNames("py-12", "lg:pt-96 lg:pb-24")}
                  style={{
                    backgroundColor: `${caseStudy.colors}`,
                  }}
                >
                  <Link href={`/case-studies/${caseStudy.slug.current}`}>
                    <a>
                      <h2
                        className={classNames(
                          "font-display font-bold text-gold text-2xl",
                          "lg:text-4xl"
                        )}
                      >
                        {caseStudy.title}
                      </h2>
                      <h4
                        className={classNames(
                          "font-bold text-gold text-sm mt-4",
                          "lg:text-lg"
                        )}
                      >
                        {caseStudy.client}
                      </h4>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

CaseStudiesSection.propTypes = {
  headingLine1: PropTypes.string,
  headingLine2: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default CaseStudiesSection;
