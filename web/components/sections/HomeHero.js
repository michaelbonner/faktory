import { Transition } from "@headlessui/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import client from "../../client";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

function HomeHero({
  headingLine1,
  headingLine2,
  headingLine3,
  tagline,
  mainCallout,
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

  console.log({headingLine1, headingLine2, headingLine3})

  return (
    <>
      <div
        className="bg-dark-gray"
        style={{
          backgroundImage: `url("/images/texture-white.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-white grid lg:grid-cols-2 items-end">
          <h1 className="text-[20vw] lg:text-[160px] 2xl:text-[200px] leading-[0.8] font-bold font-serif">
            {headingLine1 && (
              <Transition
                appear={true}
                show={true}
                enter="relative ease-in transition-all duration-500"
                enterFrom="opacity-0 translate-y-24"
                enterTo="opacity-100 translate-y-0"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span className="block">{headingLine1}</span>
              </Transition>
            )}
            {headingLine2 && (
              <Transition
                appear={true}
                show={true}
                enter="relative ease-in transition-all delay-500 duration-500"
                enterFrom="opacity-0 translate-y-24"
                enterTo="opacity-100 translate-y-0"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span className="block">{headingLine2}</span>
              </Transition>
            )}
            {headingLine3 && (
              <Transition
                appear={true}
                show={true}
                enter="relative ease-in transition-all delay-1000 duration-500"
                enterFrom="opacity-0 translate-y-24"
                enterTo="opacity-100 translate-y-0"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span className="block text-gold">{headingLine3}</span>
              </Transition>
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
            <div className="uppercase font-display text-[40px] 2xl:text-[50px] lg:text-5xl leading-tight">
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
                objectFit="cover"
                layout="fill"
                image={mainCallout}
              />
            </div>
            <div className="absolute flex items-end justify-center p-12 inset-0 opacity-0 group-hover:opacity-100 bg-orange bg-opacity-70 transition-all duration-500">
              <Link href="/">
                <a className="whiteTransparentButton">See more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-near-white pt-4 pb-24">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 my-4">
            <div className="relative aspect-w-16">
              <SanityImage image={callout1} />
            </div>
            <div className="relative aspect-w-16">
              <SanityImage image={callout2} />
            </div>
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
  tagline: PropTypes.array,
  callout1: PropTypes.object,
  callout2: PropTypes.object,
};

export default HomeHero;
