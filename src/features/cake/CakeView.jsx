import { useSelector, useDispatch } from "react-redux";
import { ordered, refilled } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes-{numOfCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order cake</button>
      <button onClick={() => dispatch(refilled(1))}>Restock cakes</button>
    </div>
  );
};

export default CakeView;
