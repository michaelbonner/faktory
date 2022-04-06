import { Transition } from "@headlessui/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import client from "../../client";
import SanityImage from "../SanityImage";
import SimpleBlockContent from "../SimpleBlockContent";

function Hero({ headingLine1, headingLine2, body }) {
  return (
    <>
      <div
        className="bg-white"
        style={{
          backgroundImage: `url("/images/texture.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 lg:py-36 text-dark-gray grid gap-8">
          <h1 className="text-7xl lg:text-9xl leading-[0.8] font-bold font-serif text-gold">
            {headingLine1 && (
              <Transition
                appear={true}
                show={true}
                enter="relative transition-all duration-700"
                enterFrom="opacity-0 -bottom-2"
                enterTo="opacity-100 bottom-0"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span className="block">{headingLine1}</span>
              </Transition>
            )}
          </h1>
          <h2 className="font-bold uppercase text-gold text-2xl lg:text-4xl mt-8">
            {headingLine2 && (
              <Transition
                appear={true}
                show={true}
                enter="relative transition-all duration-[900ms]"
                enterFrom="opacity-0 -bottom-2"
                enterTo="opacity-100 bottom-0"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <span className="block">{headingLine2}</span>
              </Transition>
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
