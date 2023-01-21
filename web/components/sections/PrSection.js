import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { classNames } from "../../functions/classNames";

function PrSection({ prItems, ...rest }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const totalPages = useMemo(
    () => Math.ceil(prItems.length / itemsPerPage),
    [itemsPerPage, prItems.length]
  );

  // const currentPrItems = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * itemsPerPage;
  //   const lastPageIndex = firstPageIndex + itemsPerPage;
  //   return prItems.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage, itemsPerPage, prItems]);

  // function nextPage() {
  //   setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  // }

  return (
    <div className="max-w-7xl px-4 mx-auto mt-12">
      {prItems.map((prItem, index) => (
        <div className="user-content" key={index}>
          <h2>{prItem.title}</h2>
          <div className="text-xs mb-5 -mt-3">
            <span>{prItem.date}</span>
          </div>

          <p className="p2">{prItem.shortDescription}</p>
          <Link href={`news/${prItem.slug?.current}`}>
            <div
              className={classNames(
                "standardButton mt-12 mr-[50vw] cursor-pointer",
                "lg:mr-0"
              )}
            >
              {prItem.buttonTextOverride || "Read More"}
            </div>
          </Link>
          <div className="my-20 h-0.5 bg-gray-700" />
        </div>
      ))}
      <div className="flex justify-end gap-x-6 text-xs text-orange font-bold p-6 -mt-20 mb-12">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            <Link
              href={{
                pathname: "/news",
                query: { page: currentPage - 1 },
              }}
            >
              &lt; Back
            </Link>
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            <Link
              href={{
                pathname: "/news",
                query: { page: currentPage + 1 },
              }}
            >
              Next Page &gt;
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

PrSection.propTypes = {
  prItems: PropTypes.arrayOf(PropTypes.object),
};

export default PrSection;
