import PropTypes from "prop-types";
import RenderSections from "../RenderSections";

function Hero({ workItems }) {
  return (
    <>
      <div>
        {workItems.length > 0 &&
          workItems.map((workItem) => {
            return (
              <RenderSections key={workItem._id} sections={workItem.content} />
            );
          })}
        Work
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
