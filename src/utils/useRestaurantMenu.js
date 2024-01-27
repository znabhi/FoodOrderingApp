import { RESMENU_CDN } from "./constant";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resMenu, setresMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESMENU_CDN + "=" + resId);
    const json = await data?.json();
    setresMenu(json?.data);
    // console.log(json?.data?.cards[0]?.card?.card?.info?.name);
  };
  return resMenu;
};

export default useRestaurantMenu;
