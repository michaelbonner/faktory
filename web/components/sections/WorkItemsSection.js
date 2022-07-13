import PropTypes from "prop-types";
import RenderSections from "../RenderSections";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";
import Link from "next/link";

function WorkItemsSection({ workItems }) {
  return (
    <>
      <div
        className={classNames(
          "grid grid-cols-1",
          "lg:mx-auto lg:w-2/3 lg:gap-x-20 lg:grid-cols-2 lg:-mt-24"
        )}
      >
        {workItems.length > 0 &&
          workItems.map((workItem) => {
            const workImage = workItem.workImage?.asset._ref;
            return (
              <div
                className={classNames("text-center pb-12", "lg:pb-24")}
                key={workItem._id}
              >
                {workImage && <SanityImage image={workImage} />}
                {/* <RenderSections sections={workItem.content} /> */}
                <h2
                  className={classNames(
                    "font-bold uppercase text-gold text-2xl mt-8",
                    "lg:text-4xl"
                  )}
                >
                  {workItem.title}
                </h2>
                <h4
                  className={classNames(
                    "font-bold uppercase text-gold text-sm mt-4",
                    "lg:text-lg"
                  )}
                >
                  {workItem.client}
                </h4>
                <Link href={`/work/${workItem.slug.current}`}>
                  <a
                    className={classNames(
                      "standardButton mt-8 mx-auto w-3/5",
                      "lg:w-4/5"
                    )}
                  >
                    Learn More
                  </a>
                </Link>
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
