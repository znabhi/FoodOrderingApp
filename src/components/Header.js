// import img from "../../files/logo.png";
import { CART_ICON } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  //   const onlineStatus = useOnlineStatus();
  const [btn, setBtn] = useState("Login");
  const data = useContext(UserContext);
  // Subscribing to the Store Using Selector
  const cartItems = useSelector((x) => x?.cart?.item);
  // console.log(cartItems);
  return (
    <header>
      <div className="flex justify-between items-center ">
        <img
          className=" w-1/12 "
          src={
            "https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          }
        />
        <nav className="navs_links">
          <ol className="flex p-5 gap-10  place-items-center ">
            <li className=" font-bold ">
              {/* {onlineStatus == true ? "Online: ✅" : "Offline: 🔴"} */}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery Store</Link>
            </li>
            <li>
              <Link to="/lifting/up/state_var">Lifting Up Concept</Link>
            </li>
            <li>
              <Link to="/ad">Ads</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="group">
              <Link to="/cartDetails">
                <div className="text-right font-semibold font-sans absolute w-12 top-6">
                  {cartItems?.length}
                </div>
                <img src={CART_ICON} className="w-10" />
                <div
                  id="cartInfo"
                  className=" p-3 bg-gray-600 rounded-xl absolute ml-[-60px] invisible group-hover:visible"
                >
                  {cartItems?.map((x) => (
                    <h1 className=" capitalize font-bold text-gray-400">
                      {x?.card?.info?.name}
                    </h1>
                  ))}
                </div>
              </Link>
            </li>
            <li>
              <a href="#">
                <button
                  onClick={() => {
                    btn == "Login" ? setBtn("Logout") : setBtn("Login");
                  }}
                >
                  {btn}
                </button>
              </a>
            </li>
            <li>
              <h1>
                {data?.loggedInUser} / {data?.name}
              </h1>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};
export default Header;
