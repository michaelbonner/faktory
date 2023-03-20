import { motion } from "framer-motion";
import Image from "next/image";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../functions/classNames";
import Cta from "../Cta";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

function HomeHero({
  headingLine1,
  headingLine2,
  headingLine3,
  tagline,
  mainCallout,
  cta,
  callout1,
  callout2,
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
      <div
        className="bg-dark-gray"
        style={{
          backgroundImage: `url("/images/texture-white.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 2xl:px-0 py-24 lg:py-36 text-white grid lg:grid-cols-2 items-end">
          <h1 className="text-[20vw] lg:text-[160px] 2xl:text-[200px] leading-[0.8] font-bold font-serif">
            {headingLine1 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.2,
                  duration: 0.8,
                  type: "spring",
                }}
              >
                <span className="block">{headingLine1}</span>
              </motion.div>
            )}
            {headingLine2 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.3,
                  duration: 0.8,
                  type: "spring",
                }}
              >
                <span className="block">{headingLine2}</span>
              </motion.div>
            )}
            {headingLine3 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ease: "easeInOut",
                  delay: 0.4,
                  duration: 0.8,
                  type: "spring",
                }}
              >
                <span className="block text-gold">{headingLine3}</span>
              </motion.div>
            )}
          </h1>
          <div className="grid gap-y-24 justify-end">
            <div className="flex justify-end">
              <Image
                src="/images/brand-bars.svg"
                alt="Brand bars"
                width="240px"
                height="40px"
                priority={true}
              />
            </div>
            <div
              className={classNames(
                "uppercase font-display text-[40px] leading-tight",
                "lg:translate-y-8",
                "2xl:text-[40px] 2xl:translate-y-0"
              )}
            >
              <SimpleBlockContent blocks={tagline} />
            </div>
          </div>
        </div>
        <div
          className="max-w-7xl mx-auto px-4"
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
                layout="fill"
                image={mainCallout}
              />
            </div>
            <div className="absolute flex items-end justify-center p-12 inset-0 opacity-0 group-hover:opacity-100 bg-orange bg-opacity-70 transition-all duration-500">
              {cta && cta.route && (
                <Cta className="whiteTransparentButton" {...cta} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-near-white pt-4 pb-24">
        <div className="max-w-7xl bg-near-white px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 my-4">
            <SanityImage animate={true} image={callout1} />
            <SanityImage animate={true} image={callout2} />
          </div>
        </div>
      </div>
    </>
  );
}

HomeHero.propTypes = {
  headingLine1: PropTypes.string,
  headingLine2: PropTypes.string,
  headingLine3: PropTypes.string,
  mainCallout: PropTypes.object,
  cta: PropTypes.object,
  tagline: PropTypes.array,
  callout1: PropTypes.object,
  callout2: PropTypes.object,
};

export default HomeHero;
