import { useEffect, useState } from "react";
import React from "react";
import { IMG_CDN } from "../utils/constant";
const DisplayPromotedRes = () => {
  const [DisRes, setDisRes] = useState("");
  useEffect(() => {
    PromotedfetchRes();
  }, []);
  PromotedfetchRes = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setDisRes(
      json?.data?.cards?.map((x) => x?.card?.card?.info)?.filter((x) => x?.id)
    );
  };
  if (DisRes.length == 0) {
    return <>Loading....</>;
  }

  return (
    <>
      <div className="mt-20 grid grid-cols-4 max-w-screen-lg m-auto gap-10">
        {DisRes?.map((x) => (
          <>
            <div key={x?.id} className="h-80">
              <div className="cardbody">
                <img
                  src={IMG_CDN + x?.cloudinaryImageId}
                  className="w-[230px] h-[150px]  object-cover rounded-3xl"
                />
              </div>
              <div className=" w-11/12 m-auto pt-4 ">
                <>
                  {x?.promoted == true ? (
                    <h1 className=" text-md text-center bg-gray-600 w-7  rounded ">
                      Ad
                    </h1>
                  ) : undefined}{" "}
                </>
                <p className="font-medium text-xl w-[205px] whitespace-nowrap overflow-hidden text-ellipsis ">
                  {x?.name}
                </p>
                <p className="font-medium ">
                  <span>★</span>
                  <span className="ml-1">{x?.avgRating} • </span>
                  <span className="">{x?.sla?.slaString}</span>
                </p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40 text-slate-400 font-medium">
                  {x?.cuisines?.join(", ")}
                </p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40 text-slate-400 font-medium">
                  {x?.areaName}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
// //Higher Order Componenet
// export const WithPromotedLable = (DisplayPromotedRes) => {
//   return () => {
//     return (
//       <>
//         <label>Promoted</label>
//         <DisplayPromotedRes />
//       </>
//     );
//   };
// };

export default DisplayPromotedRes;
