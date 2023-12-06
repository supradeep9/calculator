import React from "react";
import { ACTIONS } from "./App";

const Operator = ({ dispatch, operator }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operator } });
      }}
    >
      {operator}
    </button>
  );
};

export default Operator;
