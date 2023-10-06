"use client";

import { closeModel } from "@/redux/features/modelSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Model = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modelReducer);
  console.log(isOpen);

  return (
    <div>
      <h1>this is a model</h1>
      <button onClick={() => dispatch(closeModel())}>Close Model</button>
    </div>
  );
};

export default Model;
