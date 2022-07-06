import PropTypes from "prop-types";
import RenderSections from "../RenderSections";
import { classNames } from "../../functions/classNames";

function Hero({ workItems }) {
  return (
    <>
      <div
        className={classNames(
          "grid grid-cols-1",
          "lg:mx-auto lg:w-2/3 lg:gap-x-10 lg:grid-cols-2 lg:-mt-24"
        )}
      >
        {workItems.length > 0 &&
          workItems.map((workItem) => {
            return (
              <div key={workItem.id}>
                <RenderSections sections={workItem.content} />
              </div>
            );
          })}
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
