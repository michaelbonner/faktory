import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Hero({ headingLine1, headingLine2, body }) {
  return (
    <>
      <div
        className="bg-almost-white"
        style={{
          backgroundImage: `url("/images/texture.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-dark-gray grid gap-8">
          <h1 className="text-7xl lg:text-9xl leading-[0.8] font-bold font-serif text-gold">
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
          </h1>
          <h2 className="font-bold uppercase text-gold text-2xl lg:text-4xl mt-8">
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
          </h2>
          <div className="grid lg:flex justify-between gap-8">
            <div className="max-w-2xl text-2xl">
              <p>{body}</p>
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  headingLine1: PropTypes.string,
  headingLine2: PropTypes.string,
  body: PropTypes.string,
};

export default Hero;
