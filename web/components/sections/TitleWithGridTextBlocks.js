import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import React from "react";
import SimpleBlockContent from "../SimpleBlockContent";

function TitleWithGridTextBlocks({ title, column1, column2, column3 }) {
  return (
    <>
      <div className="bg-white">
        <div className="user-content max-w-7xl mx-auto px-4 py-8 lg:py-16 text-dark-gray grid gap-8">
          <h2>
            {title && (
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
                <span className="block">{title}</span>
              </Transition>
            )}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 leading-10">
            {column1 && (
              <div className="text-sm">
                <SimpleBlockContent blocks={column1} />
              </div>
            )}
            {column2 && (
              <div className="text-sm">
                <SimpleBlockContent blocks={column2} />
              </div>
            )}
            {column3 && (
              <div className="text-sm">
                <SimpleBlockContent blocks={column3} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

TitleWithGridTextBlocks.propTypes = {
  title: PropTypes.string,
  column1: PropTypes.arrayOf(PropTypes.object),
  column2: PropTypes.arrayOf(PropTypes.object),
  column3: PropTypes.arrayOf(PropTypes.object),
};

export default TitleWithGridTextBlocks;
