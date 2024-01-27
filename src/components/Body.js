import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerEffect from "./ShimmerEffect";
import useOnlineStatus from "../utils/useOnlineStatus";
import DisplayPromotedRes from "./DisplayPromotedRes";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchBox, setsearchBox] = useState("");
  const [filterRestu, setfilterRestu] = useState([]);
  // const [getValue, setGetValue] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestu(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1> Check Internet Connection </h1>;
  }
  const { name, setUserName } = useContext(UserContext);
  return listOfRes?.length == 0 ? (
    <ShimmerEffect />
  ) : (
    <>
      <h1 className="text-center">Login Usename : {name}</h1>
      <div className=" text-center mt-5">
        <input
          className="p-5 border border-black"
          value={name}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <section className="flex gap-5 justify-center mt-10  mb-14">
        <div className="  ">
          <input
            className="pt-3 pb-3 pl-4 w-80 outline-none bg-transparent "
            placeholder="Search Your Food..."
            value={searchBox}
            onChange={(e) => {
              setsearchBox(e.target.value);
            }}
          />
          <button
            className="pt-3 pb-3 pr-4 pl-4 bg-purple-400 rounded "
            onClick={() => {
              const filtered = listOfRes?.filter((x) =>
                x?.info?.name?.toLowerCase()?.includes(searchBox?.toLowerCase())
              );
              setfilterRestu(filtered);
            }}
          >
            Search
          </button>
          {/* </form>  */}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => {
            const FilterRes = listOfRes?.filter((x) => x.info.avgRating > 4);
            setfilterRestu(FilterRes);
          }}
        >
          Click Me
        </button>
      </section>
      <div className=" grid grid-cols-4 max-w-screen-lg m-auto gap-10">
        {filterRestu?.map((x) => (
          <RestaurantCard key={x?.info?.id} resData={x.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
