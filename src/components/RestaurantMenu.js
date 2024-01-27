import { useParams } from "react-router-dom";
import { IMG_CDN, RESMENU_CDN } from "../utils/constant";
import ShimmerEffect from "../components/ShimmerEffect";
// import DropIcon from "../../files/down-arrow.png";
// import UpIcon from "../../files/up.png";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItems from "./RestuarantItems";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <ShimmerEffect />;
  const { name, city, cloudinaryImageId, cuisines, avgRating, areaName } =
    resMenu?.cards[0]?.card?.card?.info;
  const getItemCards =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
      (x) => x?.card?.info?.id
    );
  const category =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (x) =>
        x?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(getItemCards);
  return (
    <>
      <div className="mainDiv pr-72 pl-72">
        <div className="flex justify-between p-5">
          <div className="">
            <p className=" text-xl font-medium mb-2">{name}</p>
            <p>{cuisines?.join(", ")}</p>
            <p>{areaName}</p>
          </div>
          <button className="border rounded-xl">
            <div className=" pt-1 pl-3 pb-1 pr-3 ">
              <p className=" font-medium ">
                <span className="text-base text-lg mr-1 text-green-800">★</span>
                <span className="text-md text-green-800">{avgRating}</span>
              </p>
              <p className="font-medium text-sm before:content-[''] w-12 before:bg-orange-500 before:block before:mt-1 before:mb-1 before:h-0.5 ">
                1K+ ratings
              </p>
            </div>
          </button>
        </div>
        <hr className="mb-5 mr-5 ml-5 border-t-0 border-l-0 border-r-0 border-b-2 border-pink border-dashed" />
        {category?.map((x, index) => (
          <RestaurantItems
            data={x?.card?.card}
            showIndex={index == showIndex && true}
            setShowIndex={() => setShowIndex(index == showIndex ? -1 : index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
