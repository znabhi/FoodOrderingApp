import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Items from "./Items";
const CartDetails = () => {
  const cartdetails = useSelector((x) => x?.cart?.item);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="mainDiv pr-72 pl-72">
        <h1 className=" font-medium text-center text-xl underline">
          Cart Sections
        </h1>
        <button onClick={handleClear} className=" bg-red-400 p-2 rounded-xl">
          Clear Your Cart!
        </button>
        <Items data={cartdetails} />
      </div>
    </>
  );
};
export default CartDetails;
