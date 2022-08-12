import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";
import Link from "next/link";

function WorkItemsSection({ workItems }) {
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
      <div
        className={classNames(
          "grid grid-cols-1",
          "lg:mx-auto lg:w-4/5 lg:gap-x-20 lg:gap-y-48 lg:grid-cols-2"
        )}
      >
        {workItems.length > 0 &&
          workItems.map((workItem) => {
            const workImage = workItem.workImage?.asset._ref;
            return (
              <div key={workItem._id}>
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
                        image={workImage}
                      />
                    </div>
                    <div className="absolute flex items-end justify-center p-12 inset-0 opacity-0 group-hover:opacity-100 bg-orange bg-opacity-70 transition-all duration-500">
                      <Link href={`/work/${workItem.slug.current}`}>
                        <a className={classNames("whiteTransparentButton")}>
                          Learn More
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={classNames("w-full text-center")}>
                  <div className={classNames("py-12")}>
                    <h2
                      className={classNames(
                        "font-display font-bold text-gold text-2xl",
                        "lg:text-4xl"
                      )}
                    >
                      {workItem.title}
                    </h2>
                    <h4
                      className={classNames(
                        "font-bold text-gold text-sm mt-4",
                        "lg:text-lg"
                      )}
                    >
                      {workItem.client}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

WorkItemsSection.propTypes = {
  headingLine1: PropTypes.string,
  headingLine2: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default WorkItemsSection;
