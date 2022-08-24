import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";

function LeadershipTeam({ team }) {
  return (
    <>
      <div className={classNames("bg-white py-12 text-center", "lg:py-24")}>
        <h3 className="text-2xl font-bold mb-2 text-gold font-display uppercase">
          Faktory Leadership
        </h3>
        <div
          className={classNames(
            "grid grid-cols-2 gap-6 justify-center max-w-7xl mx-auto px-4 py-8 text-dark-gray",
            "sm:gap-8",
            "lg:py-16 lg:grid-cols-3 lg:gap-y-24",
            "xl:grid-cols-4"
          )}
        >
          {team &&
            team.map((leader, index) => {
              return (
                <div
                  className={classNames(
                    "text-center grid items-center justify-center",
                    "sm:gap-y-4"
                  )}
                  key={index}
                >
                  <div
                    className={classNames(
                      "mx-auto w-[140px]",
                      "sm:w-[180px] sm:px-8",
                      "lg:w-[240px]"
                    )}
                  >
                    <SanityImage image={leader.image} />
                  </div>
                  <div className={classNames("text-xs px-2", "sm:text-base")}>
                    <p className="font-bold">{leader.name}</p>
                    <p>{leader.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

LeadershipTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object),
};

export default LeadershipTeam;
