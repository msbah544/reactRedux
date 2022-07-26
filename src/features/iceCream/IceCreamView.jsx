import { useSelector, useDispatch } from "react-redux";
import { orderedIceCream, refilledIceCream } from "./iceCreamSlice";

const IceCreamView = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams-{numOfIceCreams}</h2>
      <button onClick={() => dispatch(orderedIceCream(1))}>
        Order ice cream
      </button>
      <button onClick={() => dispatch(refilledIceCream(1))}>
        Restock ice creams
      </button>
    </div>
  );
};

export default IceCreamView;
