import { useState } from "react";
import Items from "./Items";
import React from "react";
const RestaurantItems = ({ data, showIndex, setShowIndex }) => {
  let Ids = data?.itemCards?.map((x) => x?.card?.info?.id);
  const dropToggle = () => {
    setShowIndex();
  };
  /* Accordion Head */
  return (
    <>
      <div className="p-5" key={Ids}>
        <div className=" border-gray-500 border-b-8 mt-5 pb-5">
          <button
            onClick={dropToggle}
            className="flex w-full justify-between pt-2 pb-2"
          >
            <h1 className="text-lg font-medium">
              {data?.title} ({data?.itemCards?.length})
            </h1>
            <span>🔼</span>
          </button>
          {showIndex && <Items data={data?.itemCards} />}
        </div>
      </div>
    </>
  );
};
export default RestaurantItems;
