import { useDispatch } from "react-redux";
import { IMG_CDN } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
const Items = ({ data }) => {
  const dispatch = useDispatch();
  // console.log(dispatch);
  const handleAddItem = (x) => {
    dispatch(addItem(x));
  };

  const handlePopItem = () => {
    dispatch(removeItem());
  };
  return (
    <>
      <div key={data?.map((x) => x?.card?.info?.id)}>
        {data?.map((x) => (
          <>
            <div key={x?.card?.info?.id}>
              <div className="flex justify-between mt-8">
                <div>
                  <p className="font-medium">{x?.card?.info?.name}</p>
                  <p>
                    ₹{x.card.info.price / 100 || x.card.info.defaultPrice / 100}
                  </p>
                  <p className="text-justify w-[590px] text-md mt-3">
                    {x?.card?.info?.description}
                  </p>
                </div>
                <div>
                  <div className="absolute mt-20 ml-2">
                    <button
                      className=" bg-amber-300 rounded-lg pr-2 pl-2 ml-1 pt-1 pb-1 font-medium"
                      onClick={() => handleAddItem(x)}
                    >
                      Add +
                    </button>
                    <button
                      className=" bg-red-300 rounded-lg pr-2 pl-2 ml-1 pt-1 pb-1 font-medium"
                      onClick={() => handlePopItem()}
                    >
                      Del -
                    </button>
                  </div>
                  <img
                    src={IMG_CDN + x?.card?.info?.imageId}
                    className="object-cover rounded-xl w-32 h-24"
                  />
                </div>
              </div>
              <div className="h-[0.5px] bg-gray-600 mt-12"></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Items;
