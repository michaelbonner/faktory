import React, { useState } from "react";
import { useNextSanityImage } from "@fevernova90/next-sanity-image";
import Image from "next/image";
import client from "../client";
import { motion } from "framer-motion";

const defaultAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { delay: 0.4, duration: 0.7, type: "spring" },
  variants: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1.2 },
  },
};

function SanityImage({ animate = true, animationProps, image, ...rest }) {
  const [animations] = useState(
    animationProps ? animationProps : defaultAnimationProps
  );

  const imageProps = useNextSanityImage(client, image);

  if (rest.layout === "fill") {
    delete imageProps.height;
    delete imageProps.width;
  }

  const alt =
    image?.alt || image?.title || image?.description || "website image";

  const ImageComponent = () => {
    if (animate) {
      return (
        <motion.div {...animations}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            {...imageProps}
            layout="responsive"
            sizes="(max-width: 800px) 100vw, 800px"
            alt={alt}
            {...rest}
          />
        </motion.div>
      );
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...imageProps}
          layout="responsive"
          sizes="(max-width: 800px) 100vw, 800px"
          alt={alt}
          {...rest}
        />
      );
    }
  };

  return <ImageComponent />;
}

export default SanityImage;
