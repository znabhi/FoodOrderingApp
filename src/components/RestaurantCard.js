import { IMG_CDN } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines, id, areaName } =
    props?.resData;
  // console.log(id);
  return (
    <>
      <div className="h-80">
        <Link to={/restaurantmenu/ + id}>
          <div className="cardbody">
            <img
              src={IMG_CDN + cloudinaryImageId}
              className="w-[230px] h-[150px]  object-cover rounded-3xl"
            />
          </div>
          <div className=" w-11/12 m-auto pt-4 ">
            <p className="font-medium text-xl w-[205px] whitespace-nowrap overflow-hidden text-ellipsis ">
              {name}
            </p>
            <p className="font-medium ">
              <span>★</span>
              <span className="ml-1">{avgRating} • </span>
              <span className="">{props?.resData?.sla?.slaString}</span>
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40 text-slate-400 font-medium">
              {cuisines?.join(", ")}
            </p>
            <p className="whitespace-nowrap overflow-hidden text-ellipsis max-w-40 text-slate-400 font-medium">
              {areaName}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default RestaurantCard;
