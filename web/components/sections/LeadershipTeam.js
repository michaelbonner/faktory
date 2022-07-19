import PropTypes from "prop-types";
import React from "react";
import { classNames } from "../../functions/classNames";
import SanityImage from "../SanityImage";

function LeadershipTeam({ team }) {
  return (
    <>
      <div className="bg-white py-12 text-center lg:py-24">
        <h3 className="text-2xl font-bold mb-2 text-gold font-display uppercase">
          Faktory Leadership
        </h3>
        <div
          className={classNames(
            "max-w-7xl mx-auto px-4 py-8 lg:py-16 text-dark-gray",
            "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 lg:gap-y-24"
          )}
        >
          {team &&
            team.map((leader, index) => {
              return (
                <div
                  className="text-center grid gap-y-4 items-center justify-center"
                  key={index}
                >
                  <div className="px-8 w-[240px]">
                    <SanityImage image={leader.image} />
                  </div>
                  <div>
                    <p className="font-bold">{leader.name}</p>
                    <p className="">{leader.title}</p>
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
