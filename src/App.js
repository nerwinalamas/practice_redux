import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const number = useSelector((state) => state.countReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Total: {number}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
