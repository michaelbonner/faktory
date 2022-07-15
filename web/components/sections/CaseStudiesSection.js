import PropTypes from "prop-types";
import RenderSections from "../RenderSections";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";
import Link from "next/link";

function CaseStudiesSection({ caseStudies }) {
  return (
    <div className="-mt-24">
      {caseStudies.length > 0 &&
        caseStudies.map((caseStudy) => {
          console.log(caseStudy);
          const caseStudyImage = caseStudy.caseStudyImage?.asset._ref;
          return (
            <div
              className={classNames(
                "flex flex-col -space-y-96 w-full text-center"
              )}
              key={caseStudy._id}
            >
              <div className="w-1/3 lg:w-2/3 mx-auto pb-8">
                {caseStudyImage && <SanityImage image={caseStudyImage} />}

                {/* <RenderSections sections={caseStudy.content} /> */}
              </div>
              <div
                className="lg:pt-96 pb-12"
                style={{
                  backgroundColor: `${caseStudy.colors}`,
                }}
              >
                <h2
                  className={classNames(
                    "font-bold uppercase text-gold text-2xl",
                    "lg:text-4xl"
                  )}
                >
                  {caseStudy.title}
                </h2>
                <h4
                  className={classNames(
                    "font-bold uppercase text-gold text-sm mt-4",
                    "lg:text-lg"
                  )}
                >
                  {caseStudy.client}
                </h4>
                <Link href={`/case-studies/${caseStudy.slug.current}`}>
                  <a
                    className={classNames(
                      "standardButton my-8 mx-auto w-3/5",
                      "lg:w-1/4"
                    )}
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

CaseStudiesSection.propTypes = {
  headingLine1: PropTypes.string,
  headingLine2: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
};

export default CaseStudiesSection;
